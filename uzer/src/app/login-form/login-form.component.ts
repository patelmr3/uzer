import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userSerice: UsersService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'firstName': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
      ])
    });
  }

  doLogin(loginForm) {
    let fc = loginForm.controls;
    let formData = {
      firstName: fc.firstName.value,
      email: fc.email.value
    }
    if(loginForm.valid) {
      this.userSerice.login(formData).subscribe((res) => {
        console.log(res);
      });
    }
  }

}
