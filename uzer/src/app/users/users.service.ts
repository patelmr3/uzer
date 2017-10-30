import { Injectable } from '@angular/core';

@Injectable()
export class UsersService{

  constructor() {}

  insert(userData, callBack) {
    const userDB = JSON.parse(window.localStorage.getItem('users')); //get users from local storage
    userData.userId = userDB.length + 1 || 1; //assign user id
    userDB.push(userData); //push new user in to user database
    window.localStorage.setItem('users', JSON.stringify(userDB)); 
    callBack(userData.userId);
  }

  select() {
    return JSON.parse(window.localStorage.getItem('users'));
  }

  selectOne(userId) {
    let user;
    const userDB = JSON.parse(window.localStorage.getItem('users')); //get users from local storage
    user = userDB.find(user => {
      return (user.userId == userId) ? true : false;
    });
    return user;
  }

}