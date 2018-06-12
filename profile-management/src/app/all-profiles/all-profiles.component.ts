import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile-service';
import { Person } from '../model';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {

  persons: any;
  errorMessage: string;
  searchQuery: string;
  p: number = 1;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadAllProfile();
  }

  loadAllProfile() {
    this.profileService.getAll().subscribe(
      response => this.persons = response,
      error => this.errorMessage = <any>error
    );
  }

  showAll() {
    console.log(JSON.stringify(this.persons));
    // this.persons.forEach(person => {
    //   console.log(person.username + ' ' + person.email);      
    // });
  }

  sendQuery() {
    ;
  }

}
