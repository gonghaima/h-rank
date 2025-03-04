import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: "viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.scss"]
})

export class Viewer implements OnInit {
  @Input() catalogImage;
  constructor() {}

  ngOnInit() {
  }
}
