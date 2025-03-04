import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "thumbs",
  templateUrl: "./thumbs.component.html",
  styleUrls: ["./thumbs.component.scss"],
})
export class Thumbs implements OnInit {
  @Input() items;
  @Input() currentIndex;
  @Output() selectedCatalog: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit() {}
  selectCatalog(index: number) {
    this.selectedCatalog.emit(index);
  }
}
