import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { trigger, state, style, animate, group, transition } from '@angular/animations';

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
export class UsersComponent implements OnInit {

  users;
  slideInUserInitials: String;

  constructor(private userDataService: UsersService) { }

  ngOnInit() {
    this.users = this.userDataService.select();
    this.slideInUserInitials = 'in';
  }

}
