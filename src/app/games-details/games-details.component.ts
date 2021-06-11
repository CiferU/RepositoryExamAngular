import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.css']
})
export class GamesDetailsComponent implements OnInit {

  detailsForm!:FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.detailsForm = this.formBuilder.group({
      preferedGame:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      mainGame:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      secondaryGame:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      optionalGame:new FormControl('', [Validators.minLength(8), Validators.maxLength(20)]),
      yearsGaming:new FormControl('', [Validators.required])
    })
  }

  get getControl(){
    return this.detailsForm.controls;
  }

}
