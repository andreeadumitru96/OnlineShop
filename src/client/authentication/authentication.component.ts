import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { User } from '../user';

@Component({
  selector: 'my-authentication',
  templateUrl: './authentication/authentication.component.html',
  providers: [AuthenticationService]
  // styleUrls : ['src/client/login.component.css']
})
export class AuthenticationComponent implements OnInit{ 

  users: User[];
  returnUrl: string;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

  login(username: string, password: string, error: any): void {
    
    this.authenticationService.login(username, password)
    .subscribe(
      res => {
        document.location.href = "/";
      },
      err => {
        console.log(err);
        const error = JSON.parse(err.body);
      });
    
  }

}