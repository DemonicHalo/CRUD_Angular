import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { datamodel } from "./list/model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //add employee
  addemployee(data: datamodel) {
    return this.http.post<datamodel>("http://localhost:3000/posts", data);
  }

  //get employee
  getemployee() {
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }
  //delete
  deleteemployee(id: number) {
    return this.http.delete<datamodel>("http://localhost:3000/posts/" + id);
  }
  // fetch data
  fetchdata(id: number) {
    return this.http.get<datamodel>("http://localhost:3000/posts/" + id);
  }

  //update
  updateemployee(data: datamodel, id: number) {
    return this.http.put<datamodel>("http://localhost:3000/posts/" + id, data);
  }
}
