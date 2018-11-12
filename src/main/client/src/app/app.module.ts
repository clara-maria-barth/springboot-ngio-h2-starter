import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScratchComponent } from './scratch/scratch.component';
import {HttpClientModule} from "@angular/common/http";
import { EinkaufsprotokollComponent } from './einkaufsprotokoll/einkaufsprotokoll.component';
import {FormsModule} from "@angular/forms";
import {ProtokollServiceService} from "./protokoll-service.service";


@NgModule({
  declarations: [
    AppComponent,
    ScratchComponent,
    EinkaufsprotokollComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProtokollServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
