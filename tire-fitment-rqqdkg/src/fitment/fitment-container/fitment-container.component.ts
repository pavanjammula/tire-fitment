import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { VehicleService } from "../services/vehicle.service";
import { select, Store } from "@ngrx/store";
import * as fromApp from "../store/reducers/vehicle.reducer";
import * as fromVehicle from "../store/reducers/index";
import * as vehicleActions from "../store/actions/vehicle.action";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;
  makes$: Observable<any>;
  model$: Observable<any>;
  trim$: Observable<any>;
  fitmentSelected$: string;
  yearVal$: string;
  makeVal$: string;
  modelVal$: string;
  trimVal$: string;
  displayVehicle = false;
  progressStage = 1;

  // import the store into the constructor
  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromApp.VehicleState>
  ) {}

  ngOnInit() {
    this.years$ = this.store.pipe(select(fromVehicle.getYears));
    this.makes$ = this.store.pipe(select(fromVehicle.getMake));
    this.model$ = this.store.pipe(select(fromVehicle.getModel));
    this.trim$ = this.store.pipe(select(fromVehicle.getTrim));
  }

  clearVehicle() {
    this.displayVehicle = false;
    this.progressStage = 1;
  }

  getYears() {
    console.log("getYears");
    let obj = this.vehicleService.getYearsData();
    obj.subscribe(data => {
      this.displayVehicle = true;
      this.store.dispatch(new vehicleActions.LoadYearsSuccess(data));
    });
    //obj.subscribe(data => {this.years$ = data;});
    // dispatch an action to get array of years

    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  yearSelected(sYear) {
    console.log(sYear);
    this.yearVal$ = sYear;
    this.fitmentSelected$ = sYear + " ";
    let obj = this.vehicleService.getMakeData(sYear);
    obj.subscribe(data => {
      this.displayVehicle = true;
      this.progressStage = 2;
      this.store.dispatch(new vehicleActions.LoadMakeSuccess(data));
    });
  }

  makeSelected(sMake) {
    console.log(sMake);
    this.makeVal$ = sMake;
    this.fitmentSelected$ += sMake + " ";
    let obj = this.vehicleService.getModelData(this.yearVal$, sMake);
    obj.subscribe(data => {
      this.displayVehicle = true;
      this.progressStage = 3;
      this.store.dispatch(new vehicleActions.LoadModelSuccess(data));
    });
  }

  modelSelected(sModel) {
    console.log(sModel);
    this.modelVal$ = sModel;
    this.fitmentSelected$ += sModel + " ";
    let obj = this.vehicleService.getTrimData(
      this.yearVal$,
      this.makeVal$,
      sModel
    );
    obj.subscribe(data => {
      this.displayVehicle = true;
      this.progressStage = 4;
      this.store.dispatch(new vehicleActions.LoadTrimSuccess(data));
    });
  }

  trimSelected(sTrim) {
    console.log(sTrim);
    this.modelVal$ = sTrim;
    this.fitmentSelected$ += sTrim + " ";
    this.displayVehicle = true;
    this.progressStage = 5;
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
