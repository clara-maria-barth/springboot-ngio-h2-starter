import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Einkaufsprotokoll} from "./einkaufsprotokoll"
import {ProtokollServiceService} from "../protokoll-service.service";

@Component({
  selector: 'app-einkaufsprotokoll',
  templateUrl: './einkaufsprotokoll.component.html',
  styleUrls: ['./einkaufsprotokoll.component.css']
})
export class EinkaufsprotokollComponent implements OnInit {
  @Input() einkaufsprotokoll: Einkaufsprotokoll;
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  public protokolle: Array<any> = [];
  public id: number;
  public Form: Array<any> = [0];


  constructor(
    private httpClient:HttpClient,
  private protokollService: ProtokollServiceService) {

  }
  ngOnInit() {
    this.httpClient.get<Einkaufsprotokoll[]>("http://localhost:8080/einkaufsprotokolle")
      .subscribe(resp => {
        console.log(resp)
      });
    this.id = 0;

  }
  addFieldValue() {
    this.id += 1;
    this.fieldArray.push(this.newAttribute);
    var id = { "id" : this.id}
    var sendArray = Object.assign({}, id, this.newAttribute);
    console.log('new ', sendArray);
    this.newAttribute = {}
    this.protokollService.addProtokoll(sendArray)
      .subscribe(protokoll => {
        this.protokolle.push(protokoll);
        console.log(this.protokolle)
      });

  }
  addNewProtokoll(buyer: string, product: string, date: string, stringprice: string){
        buyer = buyer.trim();
        console.log("buy: ", buyer);
        product = product.trim();
        date = date.trim();
        var price = parseFloat(stringprice);
    this.protokollService.addProtokoll({ "id" : this.id, buyer, product, date, price} as Einkaufsprotokoll)
      .subscribe(protokoll => {
        this.protokolle.push(protokoll);
        console.log(protokoll)
      });
    this.id += 1;

    this.Form.push(this.id);

  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
}
