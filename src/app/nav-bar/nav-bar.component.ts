import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  handleLogout()
  {

    localStorage.removeItem('authToken');
    this._router.navigate(['/login'])




  }
  handleaddadmin(){
    this._router.navigate(['/addadmin']);
  }
  handlehome(){
    this._router.navigate(['/home']);
  }

}
