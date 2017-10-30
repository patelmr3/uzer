import { UsersService } from './../users/users.service';
import { Component, OnInit } from '@angular/core';
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
export class UserSingleComponent implements OnInit {
  user: String;
  userId: Number;
  userProfileSlideState;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      this.userId = params.userId; 
      this.user = this.userService.selectOne(this.userId);
      this.userProfileSlideState = 'in';
    });
  }

  goBack() {
    this.router.navigate(['/users']);
  }

}
