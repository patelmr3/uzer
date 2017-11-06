import { UsersService } from './../users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
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
