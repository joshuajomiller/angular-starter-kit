import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialMethods;
  constructor() {
    this.socialMethods = [
      {
        name: 'facebook',
        label: 'Facebook',
        icon: 'fa-facebook-f',
        color: '#3B5998'
      },
      {
        name: 'twitter',
        label: 'Twitter',
        icon: 'fa-twitter',
        color: '#55acee'
      },
      {
        name: 'google',
        label: 'Google',
        icon: 'fa-google',
        color: '#dd4b39'
      },
      {
        name: 'linkedin',
        label: 'LinkedIn',
        icon: 'fa-linkedin-in',
        color: '#007bb5'
      },
    ];
  }
  ngOnInit() {
  }

}
