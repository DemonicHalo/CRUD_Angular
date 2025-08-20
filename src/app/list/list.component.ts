// FileName: /list/list.component.ts
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { ApiService } from "../api.service";
import { datamodel } from "./model";

@Component({
  selector: "app-list",

  templateUrl: "./list.component.html",

  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  employeeform!: FormGroup;
  data: datamodel[] = [];
  filteredData: datamodel[] = []; // Initialize filteredData
  searchText: string = "";
  p: number = 1;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      city: ["", Validators.required],
      pincode: ["", Validators.required],
      phonenumber: ["", Validators.required],
    });
    this.getemployee();
  }

  addemployee(data: datamodel) {
    this.api.addemployee(data).subscribe((res) => {
      this.employeeform.reset();
      this.getemployee();
    });
  }

  getemployee() {
    this.api.getemployee().subscribe((res) => {
      this.data = res;
      this.filteredData = res; // Initialize filteredData with all data
    });
  }

  deleteemployee(data: any) {
    this.api.deleteemployee(data.id).subscribe((res) => {
      this.getemployee();
    });
  }

  filterData() {
    const term = this.searchText.toLowerCase();
    this.filteredData = this.data.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term) ||
        item.city.toLowerCase().includes(term) ||
        item.pincode.toString().includes(term) ||
        item.phonenumber.toString().includes(term)
    );
    this.p = 1; // reset to first page when filtering
  }
}
