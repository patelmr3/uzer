import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInRight } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInRight]
})
export class AppComponent implements OnInit {
  title = 'app';
  showRegistration: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (window.localStorage) {
      const userDB = window.localStorage.getItem('users');
      if (userDB === null) window.localStorage.setItem('users', '[]')
    }

    //subscribe to registration param
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const isAdd = eval(params.get('add'));
      if (isAdd) {
        this.showRegistration = true;
      } else if (isAdd === null) {
        this.showRegistration = false;
      }
    });
  }
}
