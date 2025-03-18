import { Component, OnInit } from "@angular/core";

@Component({
  selector: "length-converter",
  templateUrl: "./lengthConverter.component.html",
  styleUrls: ["./lengthConverter.component.scss"],
})
export class LengthConverter implements OnInit {
  lengthOptions = [
    { id: 0, label: "Kilometre", unit: "km" },
    { id: 1, label: "Metre", unit: "m" },
    { id: 2, label: "Centimetre", unit: "cm" },
  ];

  input1Value: number = null;
  input2Value: number = null;
  selectedOption1: number = 0;
  selectedOption2: number = 1;

  ngOnInit() {}

  convert(source: string) {
    if (source === "input1") {
      const v2 = this.convertValue(
        this.input1Value,
        Number(this.selectedOption1),
        Number(this.selectedOption2)
      );
      this.input2Value = v2;
    } else {
      const v1 = this.convertValue(
        this.input2Value,
        Number(this.selectedOption2),
        Number(this.selectedOption1)
      );
      this.input1Value = v1;
    }
  }

  convertValue(value: number, fromUnit: number, toUnit: number): number {
    if (value === null || value === undefined) return null;

    let meters: number;
    switch (fromUnit) {
      case 0:
        meters = value * 1000;
        break; // Kilometre to Metre
      case 1:
        meters = value;
        break; // Metre to Metre
      case 2:
        meters = value / 100;
        break; // Centimetre to Metre
    }

    switch (toUnit) {
      case 0:
        return meters / 1000; // Metre to Kilometre
      case 1:
        return meters; // Metre to Metre
      case 2:
        return meters * 100; // Metre to Centimetre
      default:
        return null; // Handle unexpected cases
    }
  }
}
