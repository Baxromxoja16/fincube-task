import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

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

  registerForm!:FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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
    })

  }

  pickDate(picker:any) {
    picker.open()
  }

  login() {
    if(this.logInForm.valid) {
      this.authService.login(this.logInForm.value);
      localStorage.getItem('authToken') ? this.router.navigate(['/home']) : ''
    }
  }

  register(): void {
    if(this.registerForm.valid) {}
  }
}
