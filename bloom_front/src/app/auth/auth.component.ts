import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  constructor(private service: AuthService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.location.back();
    }
  }
  login(): void{
    this.service.login(this.username, this.password).subscribe(t => {
      localStorage.setItem('token', t.token);
      this.username = '';
      this.password = '';
      window.location.reload();
    });
  }
}
