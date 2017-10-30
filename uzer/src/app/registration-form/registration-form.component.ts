import { UsersService } from '../users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm;

  constructor(private userDataService: UsersService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl('', []),
      'lastName': new FormControl('', []),
      'email': new FormControl('', [
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
      ]),
      'phone': new FormControl('', [
        Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
      ]),
      'about': new FormControl('', []),
      'jobPosition': new FormControl('', [])
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
    this.userDataService.insert(formData);
  }

}
