import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService : ApiService

  ) { }

  ngOnInit(): void {
  }

  CallARobot(){
   this.apiService.testGet().subscribe((response=>{
    let _response;
    _response = response;
    let x =JSON.parse(JSON.stringify(response));
    alert(x.greetings);
    }))

    return;

  }

  CallMyName(){
    this.apiService.nameGet().subscribe((response=>{
     let _response;
     _response = response;
     let x =JSON.parse(JSON.stringify(response));
     alert(x.name);
     }))
 
   }

}
