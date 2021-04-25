import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { FitmentModule } from "../fitment/fitment.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers } from "../fitment/store/reducers/index";
import { VehicleService } from "../fitment/services/vehicle.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FitmentModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [VehicleService]
})
export class AppModule {}
