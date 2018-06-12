import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile-service';
import { Person } from '../model';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // personList: Person[];
  errorMessage: string = '';
  ages = [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  email: string;
  pass: string;
  persons :any ;
  username: string;
  password: string;
  person: Person;
  
  constructor(  public router: Router, 
                public profileService: ProfileService, 
                public auth: AuthService
              ) { }

  ngOnInit() {
    //  this.loadAllProfile();
    this.person = new Person();
  }

  loadAllProfile() {
    this.profileService.getAll().subscribe(
      response => this.persons = response,
      error => this.errorMessage = <any>error
    );
  }

  userLogin() {
    // this.persons.forEach(person => {
    //   console.log('->' + person.name );
    // });  

    // e.preventDefault();

    // this.auth.setLoggedIn(this.email, this.pass);

    // console.log(this.email+this.pass);
    // console.log("Here we go!");
    this.person.email = this.email;
    this.person.password = this.pass;
    this.person.username = '';
    this.person.gender = '';
    this.person.address = '';
    this.person.dob = '';
    
    this.profileService.getUser(this.person).subscribe(

      (response) => {
        this.person = response;
        localStorage.setItem("email",this.person.email);
        // this.auth.setLoggedIn(this.person.email, this.password);
                // console.log(this.person.username);
                // console.log("Here we go!");
        this.router.navigate(['/profile', this.person.email]);
      },
      (error) => {
        this.errorMessage = <any>error;
        this.errorMessage = "Email or Password is not Correct";
      }
    );
    // console.log(JSON.stringify(this.person));
    // console.log('->' + this.person.username + ' ' + this.person.password + this.person.gender + this.person.email);
  }

  newProfile = () => {
    this.router.navigate(['/profileCreate']);
  }

  onSelect() {

  }

}
