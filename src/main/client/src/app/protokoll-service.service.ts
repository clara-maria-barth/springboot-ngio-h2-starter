import { Injectable } from '@angular/core';
import {Einkaufsprotokoll} from "./einkaufsprotokoll/einkaufsprotokoll";
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class ProtokollServiceService {

  constructor(private http: HttpClient) { }

  addProtokoll(protokoll: Einkaufsprotokoll){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log('protokoll: ', protokoll)
    return this.http.post<Einkaufsprotokoll>("http://localhost:8080/einkaufsprotokolle", JSON.stringify(protokoll), httpOptions)

  }

}
