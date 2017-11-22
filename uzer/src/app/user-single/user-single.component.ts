import { UsersService } from './../users/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit, OnDestroy {
  user;
  userId: String;
  paramMap;
  showSpinner: Boolean = true;
  selectOneUserSubscription = new Subscription();
  paramMapSubscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.paramMapSubscription = this.activatedRoute.paramMap
    .subscribe((paramMap) => {
      this.userId = paramMap.get('userId');// retrive user id from route
      //get user
      this.selectOneUserSubscription = this.userService.selectOne(this.userId)
      .subscribe((data) => {
        this.user = data['results'];
        this.showSpinner = false;
      });
    });
  }

  goBack() {
    this.router.navigate(['/users']);
  }

  ngOnDestroy() {
    this.selectOneUserSubscription.unsubscribe();
    this.paramMapSubscription.unsubscribe();
  }
}
