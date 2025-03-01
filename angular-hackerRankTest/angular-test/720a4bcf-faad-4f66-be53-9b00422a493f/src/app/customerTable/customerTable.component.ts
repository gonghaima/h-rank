import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Customer } from "../app.component";

@Component({
  selector: "customer-table",
  templateUrl: "./customerTable.component.html",
  styleUrls: ["./customerTable.component.scss"],
})
export class CustomerTable implements OnInit {
  @Input() customers: Customer[];
  @Output() setSelectedId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  viewDetails(customerId: string) {
    this.setSelectedId.emit(customerId);
  }
}
