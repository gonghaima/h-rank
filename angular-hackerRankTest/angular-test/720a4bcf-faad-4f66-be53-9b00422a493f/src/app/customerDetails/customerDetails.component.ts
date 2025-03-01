import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Customer, CustomerDetail } from "../app.component";

@Component({
  selector: "customer-details",
  templateUrl: "./customerDetails.component.html",
  styleUrls: ["./customerDetails.component.scss"],
})
export class CustomerDetails implements OnInit {
  @Input() customerDetailsRecords;
  @Input() selectedId;
  @Input() customers;

  constructor() {}

  ngOnInit() {}

  get customerDetail() {
    if (!this.selectedId) return null;
    const customerData = this.customers.find((c) => c.id === this.selectedId);
    const data = this.customerDetailsRecords?.find(
      (c) => c.id === this.selectedId
    );
    // debugger;
    return { ...data, ...customerData };
  }
}
