import { UsersService } from './../users/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.9)'
      })),
      state('in', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => in', animate('.3s ease-in-out'))
    ])
  ]
})
export class UserSingleComponent implements OnInit, OnDestroy {
  user;
  userId: String;
  userProfileSlideState;
  paramMap;
  showSpinner: Boolean = true;
  selectOneSubscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');// retrive user id from route
    //get user
    this.selectOneSubscription = this.userService.selectOne(this.userId)
      .subscribe((data) => {
        this.user = data['results'];
        this.showSpinner = false;
      });
    //set user profile animation state
    this.userProfileSlideState = 'in';
  }

  goBack() {
    this.router.navigate(['/users']);
  }

  ngOnDestroy() {
    this.selectOneSubscription.unsubscribe();
  }

}
