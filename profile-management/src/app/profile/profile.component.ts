import { Component, OnInit } from '@angular/core';
import { Person } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  username: string;
  gender: string;
  address: string;
  email: string = "";
  dob: string;
  password: string;
  errorMessage: string;
  person: Person;
  editable: boolean;
  ages = ["Male", "Female"];

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.editable = false;
    this.person = new Person();
    this.route.paramMap.subscribe((params) => {
      this.email = params.get('email');
    });
    if (this.email!=localStorage.getItem("email")) {
      this.router.navigate(['/login']);
    }
    this.loadProfile();
  }

  loadProfile() {
    this.person.email = this.email;
    this.person.password = '';
    this.person.username = '';
    this.person.gender = '';
    this.person.address = '';
    this.person.dob = '';
    this.profileService.getUser(this.person).subscribe(
      (response) => {
        this.person = response;
      this.email = this.person.email;
      this.password = this.person.password;
      this.username = this.person.username;
      this.gender = this.person.gender;
      this.address = this.person.address;
      this.dob = this.person.dob;
      },
      (error) => this.errorMessage = <any>error
    );
  }

  editProfile() {
    this.editable = true;
  }

  saveProfile() {
    this.editable = false;
    this.person.email = this.email;
    this.person.password = this.password;
    this.person.username = this.username;
    this.person.gender = this.gender;
    this.person.address = this.address;
    this.person.dob = this.dob;

    this.profileService.updateUser(this.person).subscribe(
      (response) => {
        this.person = response;
        this.email = this.person.email;
        this.password = this.person.password;
        this.username = this.person.username;
        this.gender = this.person.gender;
        this.address = this.person.address;
        this.dob = this.person.dob;
        this.errorMessage = "Successfully updated!";
        console.log('====>>' + this.person.dob);
      },
      (error) => {
        this.errorMessage = <any>error;
        this.errorMessage = "Error occured!"
      }
    );
  }

  logout() {
    localStorage.removeItem("email");
    this.router.navigate(['/login']);
  }
}
