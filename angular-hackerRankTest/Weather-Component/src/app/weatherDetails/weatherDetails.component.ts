import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  searchCity: string = "";
  selectedCity: data | null = null;
  showNoResults: boolean = false;

  ngOnInit() {}
  onCityChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm) {
      const found = this.weatherData.find(
        (city) => city.name.toLowerCase() === searchTerm
      );
      this.selectedCity = found || null;
      this.showNoResults = !found;
    } else {
      this.selectedCity = null;
      this.showNoResults = false;
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}