import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.css']
})
export class GamersComponent implements OnInit {

  userForm!:FormGroup;

  constructor(
    public formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      gamer:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required, Validators.minLength(8)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    })

  }

  get getControl(){
    return this.userForm.controls;
  }

}
