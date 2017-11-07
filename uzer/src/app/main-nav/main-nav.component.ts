import { UsersService } from './../users/users.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.count().subscribe((data) => {
      this.numUsers = data['totalUsers'];
    });
    this.usersService.userCreatedEvent.subscribe( (data) => {
      this.numUsers += 1;
    });
  }

}
