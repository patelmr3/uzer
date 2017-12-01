import { UsersService } from '../users/users.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  //registration form
  registrationForm: FormGroup; 

  //form controls
  firstName = new FormControl('', []);
  lastName = new FormControl('', []);
  jobPosition = new FormControl('', []);
  address = new FormControl('', []);
  email = new FormControl('', [
    Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
  ]);
  phone = new FormControl('', [
    Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
  ]);

  //properties
  errorMessage: String;
  showSpinner: Boolean;
  addressAutoComplete: any;

  //subscriptions
  insertUserSubscription = new Subscription();

  @ViewChild('address') addressInputElement: ElementRef;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private dialog: MatDialog,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      jobPosition: this.jobPosition,
      address: this.address
    });
    
    //google places autocomplete
    this.mapsAPILoader.load().then(() => {
      let addressAutoComplete = new google.maps.places.Autocomplete(this.addressInputElement.nativeElement, {
        types: ["address"]
      });
      this.addressAutoComplete = addressAutoComplete;
    });
  }

  registerUser(form) {
    this.showSpinner = true;
    let fc = form.controls;
    let place = this.addressAutoComplete.getPlace();

    const formData = {
      firstName: fc.firstName.value,
      lastName: fc.lastName.value,
      email: fc.email.value,
      phone: fc.phone.value,
      jobPosition: fc.jobPosition.value,
      address: {
        full: place.formatted_address,
        location: place.geometry.location
      }
    }

    this.insertUserSubscription = this.usersService.insert(formData)
    .subscribe((data) => {
      console.log(data);
      this.showSpinner = false;

      if(data['status'] === 'success') {
        this.usersService.emitUserCreated();
        this.router.navigate([`/users/${data['id']}`]); 
        this.dialog.closeAll();
      } else {
        this.errorMessage = data['message'];
        console.log(data['message']);
      }

    });
  }

  ngOnDestroy() {
    this.insertUserSubscription.unsubscribe();
  }
}
