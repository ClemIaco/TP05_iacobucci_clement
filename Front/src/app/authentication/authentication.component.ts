import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  authForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  get name(): AbstractControl { return this.authForm.get('name'); }
  get password(): AbstractControl { return this.authForm.get('password'); }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("ok");
  }

}
