import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { trigger, state, style, animate, group, transition } from '@angular/animations';
import { FormControl } from '@angular/forms/';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(10px)'
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      transition('void => in', animate('.3s ease-in-out', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })))
    ])
  ]
})
export class UsersComponent implements OnInit, OnDestroy {
  users;
  unfilteredUsers; //original copy of users which will not get touched by filters
  noUsers: Boolean = false;
  slideInUserInitials: String;
  showSpinner: Boolean = false;
  mapMarkers: any = [];
  mapCenter: any = {
    lat: 43.653360,
    lng: -79.385829
  };
  cityFilterList: any;
  filters: any = {};

  constructor(
    private userDataService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers({});
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let city = paramMap.get('city');
      console.log((paramMap.get('filters')));
      this.getUsers({city: city});
    });
  }

  getUsers(filters) {
    this.showSpinner = true;

    this.userDataService.getUsers(this.filters, data => {
      this.unfilteredUsers = this.users = data['results'];
      this.showSpinner = false;
      this.noUsers = (this.users.length) ? false : true;
    });

    this.slideInUserInitials = 'in';
  }

  getCities() {
    this.userDataService.getCities((cities) => {
      this.cityFilterList = cities; 
    });
  }

  locateUser(location) {
    this.mapCenter = location;
  }

  applyFilter(filter) {
    this.filters[filter.name] = filter.value ;
    this.router.navigate(['/users', {filters: JSON.stringify(this.filters)}]);
  }

  ngOnDestroy() {
  }

}
