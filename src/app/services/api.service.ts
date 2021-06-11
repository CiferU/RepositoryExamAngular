import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  serviceUrl = 'http//localhost:4000';

  constructor(
    private http: HttpClient

  ) { }

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':''
    })
  }


  public localTest() {
    try {
      let robot = {
        "name":"Eva01",
        "pilot":"Shinji"
      }
      return robot
    } catch (ex) {
      console.log(ex);
      return ex;
    }
    
  }

  public testGet(){
      let url = this.serviceUrl + '/api/hello';
      return this.http.get(url);
  }

  public nameGet(){
    let url = this.serviceUrl + '/api/name';
      return this.http.get(url);

  }

}