import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = false

  toggleBlock = true

  logInForm:FormGroup;

  registerForm!:FormGroup<any>;

  documents:any[] = []

  constructor() {
    this.logInForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      birthday: new FormControl(null, [Validators.required]),
      countryCode: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      document: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    }) as any

  }

  pickDate(picker:any) {
    picker.open()
  }

  login() {
    if(this.logInForm.valid) {
    }
  }

  register(): void {
    if(this.registerForm.valid) {
      const {
        email, password, firstName,
        lastName, birthday,
        countryCode, phoneNumber, document
      } = this.registerForm.value;

      const user:any = {
        firstName, birthday, email,
        lastName, password,
        phoneNumber:document.code + phoneNumber,
        citizenship: document.name,
        login:email,
        country: countryCode.name
      }
    }
  }

  loginWithGoogle() {

  }

  loginWithFacebook() {

  }

}
