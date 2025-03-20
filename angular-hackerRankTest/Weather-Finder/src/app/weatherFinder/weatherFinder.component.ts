import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: "weather-finder",
  templateUrl: "./weatherFinder.component.html",
  styleUrls: ["./weatherFinder.component.scss"],
})
export class WeatherFinder implements OnInit {
  cityWeather: CityWeather | null = null;
  noResults: boolean = false;
  cityName: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  searchWeather(): void {
    const url = `https://jsonmock.hackerrank.com/api/weather?name=${this.cityName}`;
    this.http.get<ApiResponse>(url).subscribe((response) => {
      if (response.data.length > 0) {
        this.cityWeather = response.data[0];
        this.noResults = false;
      } else {
        this.cityWeather = null;
        this.noResults = true;
      }
    });
  }
}
