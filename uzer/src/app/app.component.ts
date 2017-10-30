import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  constructor() {}

  ngOnInit() {
    if(window.localStorage) {
      const userDB = window.localStorage.getItem('users');
      if(userDB === null) window.localStorage.setItem('users', '[]')
    }
  }
}
