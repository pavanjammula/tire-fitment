import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Year, Make, Model, Trim } from "../store/models/vehicle";
import { throwError } from "rxjs/internal/observable/throwError";
@Injectable()
export class VehicleService {
  private yearUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/years";
  private makeUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/makes";
  private modelUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/models";
  private trimUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/trim";
  constructor(private http: HttpClient) {}

  getYearsData(): Observable<Year> {
    return this.http.get<Year>(this.yearUrl);
  }

  getMakeData(sYear): Observable<Make> {
    const options = sYear
      ? { params: new HttpParams().set("year", sYear) }
      : {};
    return this.http.get<Make>(this.makeUrl, options);
  }

  getModelData(sYear, sMake): Observable<Model> {
    const options = {
      params: new HttpParams().set("year", sYear).set("make", sMake)
    };
    return this.http.get<Model>(this.modelUrl, options);
  }

  getTrimData(sYear, sMake, sModel): Observable<Trim> {
    const options = {
      params: new HttpParams()
        .set("year", sYear)
        .set("make", sMake)
        .set("model", sModel)
    };
    return this.http.get<Trim>(this.trimUrl, options);
  }
}
