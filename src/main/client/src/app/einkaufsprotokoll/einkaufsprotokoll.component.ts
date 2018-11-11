import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Einkaufsprotokoll} from "./einkaufsprotokoll"

@Component({
  selector: 'app-einkaufsprotokoll',
  templateUrl: './einkaufsprotokoll.component.html',
  styleUrls: ['./einkaufsprotokoll.component.css']
})
export class EinkaufsprotokollComponent implements OnInit {
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  einkaufsprotokolle: Einkaufsprotokoll[];


  constructor( private httpClient:HttpClient) {

  }
  ngOnInit() {
    this.httpClient.get<Einkaufsprotokoll[]>("http://localhost:8080/einkaufsprotokolle")
      .subscribe(resp => {
        console.log(resp);
        this.einkaufsprotokolle = resp;
      });

  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    console.log('new ', this.newAttribute);
    //this.httpClient.post()
    this.newAttribute = {};



  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
}
