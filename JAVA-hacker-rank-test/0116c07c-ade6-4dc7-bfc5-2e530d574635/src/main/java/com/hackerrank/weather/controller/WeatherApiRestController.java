package com.hackerrank.weather.controller;

import com.hackerrank.weather.model.Weather;
import com.hackerrank.weather.repository.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Comparator;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/weather")
public class WeatherApiRestController {

    @Autowired
    private WeatherRepository weatherRepository;

    @PostMapping
    public ResponseEntity<Weather> createWeather(@RequestBody Weather weather) {
        if (!isValidWeather(weather)) {
            return ResponseEntity.badRequest().build();
        }
        Weather savedWeather = weatherRepository.save(weather);
        return new ResponseEntity<>(savedWeather, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Weather> getWeatherById(@PathVariable Integer id) {
        return weatherRepository.findById(id)
                .map(weather -> ResponseEntity.ok(weather))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Weather>> getWeather(
            @RequestParam(required = false) String date,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String sort) {

        List<Weather> weatherList = weatherRepository.findAll();

        // Filter by date if provided
        if (date != null) {
            LocalDate filterDate = LocalDate.parse(date);
            weatherList = weatherList.stream()
                    .filter(w -> w.getDate().equals(filterDate))
                    .collect(Collectors.toList());
        }

        // Filter by city if provided (case insensitive)
        if (city != null) {
            weatherList = weatherList.stream()
                    .filter(w -> w.getCity().toLowerCase().equals(city.toLowerCase()))
                    .collect(Collectors.toList());
        }

        // Sort by date if sort parameter is provided
        if (sort != null) {
            if (sort.equals("date")) {
                weatherList.sort(Comparator.comparing(Weather::getDate)
                        .thenComparing(Weather::getId));
            } else if (sort.equals("-date")) {
                weatherList.sort(Comparator.comparing(Weather::getDate).reversed()
                        .thenComparing(Weather::getId));
            }
        }

        return ResponseEntity.ok(weatherList);
    }

    private boolean isValidWeather(Weather weather) {
        return weather != null &&
                weather.getDate() != null &&
                weather.getLat() != null &&
                weather.getLon() != null &&
                weather.getCity() != null && !weather.getCity().isEmpty() &&
                weather.getState() != null && !weather.getState().isEmpty() &&
                weather.getTemperatures() != null &&
                weather.getTemperatures().size() == 24;
    }
}
