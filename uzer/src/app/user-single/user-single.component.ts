import { UsersService } from './../users/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  }

  goBack() {
    this.router.navigate(['/users']);
  }

  ngOnDestroy() {
    this.selectOneSubscription.unsubscribe();
  }

}
