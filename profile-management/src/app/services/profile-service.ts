import { Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person } from '../model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {

    connectionUrl = 'https://api.mongolab.com/api/1/databases/profile/collections/user-profile?apiKey=';
    apiKey = 'uuvsxawl47JM368l3CkUXIKm3AKnTTHA';
    url = 'https://api.mongolab.com/api/1/databases/profile/collections/user-profile?apiKey=uuvsxawl47JM368l3CkUXIKm3AKnTTHA';
    url1 = 'http://localhost:8000/api/';
    constructor(private http: Http) {

    }

    // getProfile(email: string, password: string): Observable<Person[]> {
    //     return this.http.get(this.url)
    //         .map((res: Response) => {
    //             res.json();
    //         })
    //         .catch(ProfileService.handleError);
    // } 

    setPofile(person: Person) {

    }

    static handleError(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server error');
    }

    getAll() {
        return this.http.get(this.url1 + 'profiles')
            .map((res: Response) => {
                res.json();
                // console.log(res.json());
            })
            .catch(ProfileService.handleError);
    }

    getUser(person: Person) {
        console.log(JSON.stringify(person));
        return this.http.post(this.url1 + 'login', person)
            .map((res: Response) => res.json())
            .catch(ProfileService.handleError);
    }

    createUser(person: Person) {
        // console.log(JSON.stringify(person));
        return this.http.post(this.url1 + 'profileCreate', person)
            .map((res: Response) => res.json())
            .catch(ProfileService.handleError);
    }

    updateUser(person: Person) {
        // console.log(JSON.stringify(person));
        return this.http.put(this.url1 + 'profileUpdate', person)
            .map((res: Response) => res.json())
            .catch(ProfileService.handleError);
    }
    
}
// + person.username + '/' + person.email + '/' + person.password + '/' + person.gender + '/' + person.address + '/' + person.dob