import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  celsius: number;
  fahrenheit: number;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }
  celsiusToFahrenheit() {
    if (this.celsius != null) {
      this.fahrenheit = Number(((this.celsius * 9/5) + 32).toFixed(1));
    }
  }

  fahrenheitToCelsius() {
    if (this.fahrenheit != null) {
      this.celsius = Number(((this.fahrenheit - 32) * 5/9).toFixed(1));
    }
  }
}
