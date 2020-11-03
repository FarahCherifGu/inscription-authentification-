import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css'],
})
export class RegistationComponent implements OnInit {
  user = new User();
  msg = ';';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}
  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this.msg = 'Registration Successuful';
      },
      (error) => {
        console.log('exception occured');
        this.msg = error.error;
      }
    );
  }
}
