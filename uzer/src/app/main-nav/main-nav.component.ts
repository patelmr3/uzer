import { UsersService } from './../users/users.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('userDropdownTargetAnimate', [
      state('void', style({
        display: 'none',
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('true', style({
        display: 'block',
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      transition('void <=> true', animate('.2s ease-in-out'))
    ])
  ]
})
export class MainNavComponent implements OnInit {
  numUsers = 0;
  isUserLoggedIn: Boolean = false;
  loggedInUser;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.sessionCheck();

    this.usersService.count().subscribe((data) => {
      this.numUsers = data['totalUsers'];
    });

    this.usersService.userCreatedEvent.subscribe((data) => {
      this.numUsers += 1;
    });

    this.usersService.userLoggedInEvent.subscribe((data) => {
      this.sessionCheck();
    })
  }

  //check if the session is active and the user exists
  sessionCheck() {
    if (window.sessionStorage) {
      const sessionUser = window.sessionStorage.getItem('loggedInUser');

      if (sessionUser) {
        this.loggedInUser = JSON.parse(sessionUser);
        this.isUserLoggedIn = true;
      } else {
        alert('Please log in');
      }
    } else {
      alert("Sorry! Your browser doesn't support session Storage. Please update your browser to use this feature");
    }
  }

  showAddUser() {
    if (!eval(this.activatedRoute.snapshot.queryParamMap.get('add'))) {
      if (this.router.url === '/') {
        this.router.navigate(['/'], { queryParams: { 'add': 'true' } });
      } else {
        this.router.navigate([], { queryParams: { 'add': 'true' } });
      }
    } else {
      this.router.navigate([]);
    }
  }

}
