import { UsersService } from '../users/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl('', []),
      'lastName': new FormControl('', []),
      'email': new FormControl('', [
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
      ]),
      'phone': new FormControl('417-779-1010', [
        Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
      ]),
      'jobPosition': new FormControl('Front-end developer', [])
    });
  }

  registerUser(form) {
    let fc = form.controls;
    const formData = {
      firstName: fc.firstName.value,
      lastName: fc.lastName.value,
      email: fc.email.value,
      phone: fc.phone.value,
      jobPosition: fc.jobPosition.value
    }
    this.usersService.insert(formData).subscribe((data) => {
      console.log(data);
      this.router.navigate([`/users/${data['id']}`]); //after completing the registration, navigate to user's profile page
    });
  }

}
