import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model';
import { ProfileService } from '../services/profile-service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  public person: Person;
  name: string;
  address: string;
  email: string;
  dob: string;
  pass1: string;
  pass2: string;
  ages = ["Male", "Female"];
  old: string;
  errorMessage: any;
  // person: any;
 

  constructor(public router: Router, public profileService: ProfileService) { }

  ngOnInit() {
    this.person = new Person();
  }

  onSubmit() { 
    this.person.username = this.name;
    this.person.email = this.email;
    this.person.password = this.pass1;
    this.person.gender = this.old;
    this.person.address = this.address;
    this.person.dob = this.dob;
    // var person = new Person(this.name,this.email,this.pass1,this.old,this.address, this.dob);
    // console.log(this.name + ' ' +this.address + ' ' +this.old + ' ' +this.pass1 + ' ' +this.pass2 + ' ' +this.email);
    // console.log(JSON.stringify(this.person));
    this.profileService.createUser(this.person).subscribe(
      response => {
        this.person = response;
        localStorage.setItem("email",this.person.email);
        this.router.navigate(['/profile',this.person.email]);
      },
      error => this.errorMessage = <any>error
    );
  }

  newHero = () => {
    // this.router.navigate(['/new-profile']);
  }

}
