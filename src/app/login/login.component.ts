import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'
import { LoginRequest } from '../login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  formSubmitted: boolean = false;
  errorMessge:string|null=null ;
  constructor(private _router: Router ,private auths:AuthService) { }

  ngOnInit(): void {
  }
  handleFormSubmit(){
    this.formSubmitted=true;
    if ( this.email=='' || this.password=='')
    {

    }
    else{
      const loginRequest:LoginRequest = {email :this.email,password:this.password};

      this.auths.login(loginRequest).subscribe(
        (response:any) => {
        
            const token = response.data.token; 
            localStorage.setItem('authToken', token);
            this.errorMessge = null;
          this._router.navigate(['/home'])
        },
        error => {
          this.errorMessge = null;
          
          const errorCode:number = error.error.errorDetails.code;
          if(errorCode==5)
          this.errorMessge = "Login Failed";
          if(errorCode==4)
         this.errorMessge =  JSON.stringify(error.error.errorDetails.details);

          console.log(error);
          
        }
      );

      }

 
  }

}
