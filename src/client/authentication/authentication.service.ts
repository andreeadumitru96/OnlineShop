import { Inject, Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthenticationComponent } from './authentication.component';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    private headers = new Headers({'Content-Type': 'application/json'});

    private authenticationUrl = 'http://localhost:3000/authenticate';
    constructor(@Inject (Http) private http: Http) { }

    
    login(username, password): Observable <any> {
        return this.http
            .post(this.authenticationUrl, JSON.stringify({username: username, password: password}), {headers:this.headers})
            .map((response: Response) => {
                let user = response.json();
                console.log(user);
                if (user && user.token) {   
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    private handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}