import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from '../services/adminservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  firstName:string='';
  lastName:string='';
  email:string='';
  password:string='';
  addadmin=true;
  errorMessge:string|null=null ;
  formSubmitted:boolean=false;
  constructor(private _router: Router,private adminService:AdminserviceService) { }

  ngOnInit(): void {
  }
  addadmintobackend(){
    const data={firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password}
    this.formSubmitted=true
    if(this.firstName=='' || this.lastName=='' || this.email=='' || this.password=='')
    {

      

    }
    else{
      this.adminService.addadmin(data).subscribe(
        (response: any) => {
  
          this.errorMessge = null;
  
          location.reload();
          
        
        },
        error => {
          const errorCode:number = error.error.errorDetails.code;
          if(errorCode==3)
          this.tokenExpiredHandler();
  
          if(errorCode == 4)
          this.errorMessge = JSON.stringify(error.error.errorDetails.details);
        }
  
  
  
  
        
      );

    }
    
  }
  tokenExpiredHandler()
  {
    this._router.navigate(['/login']);

  }

}
