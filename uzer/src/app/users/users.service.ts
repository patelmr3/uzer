import { Injectable } from '@angular/core';

@Injectable()
export class UsersService{

  constructor() {}

  insert(userData) {
    const userDB = JSON.parse(window.localStorage.getItem('users')); //get users from local storage
    userData.userId = userDB.length + 1 || 1; //assign user id
    userDB.push(userData); //push new user in to user database
    window.localStorage.setItem('users', JSON.stringify(userDB)); 
  }

  select() {
    return JSON.parse(window.localStorage.getItem('users'));
  }

}