import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  setLoggedIn(username, password) {
    
    localStorage.setItem('currentUsername', username);
    // console.log(localStorage.getItem('currentUsername'));
  }

  getLoggedIn() {
    return localStorage.getItem('currentUsername');
  }

  loggedOut() {
    return localStorage.removeItem('currentUsername');
  }

}
