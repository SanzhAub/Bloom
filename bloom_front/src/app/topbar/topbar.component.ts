import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  logged = false;

  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  logout(): void{
    localStorage.removeItem('token');
    this.logged = false;
    window.location.reload();
  }
}
