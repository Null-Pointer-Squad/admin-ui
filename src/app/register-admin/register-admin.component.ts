import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from '../services/adminservice.service'
import { Admin } from '../admin';
import { Router } from '@angular/router';
import {AddAdminComponent} from '../add-admin/add-admin.component';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})

export class RegisterAdminComponent implements OnInit {
  admins:Admin[]=[];
  
 

  constructor(private _router: Router,private adminService:AdminserviceService) { }
  ngOnInit(): void {
    this.adminService.getalladmins().subscribe(
      (response: any) => {
        this.admins=response.data
        this.admins.sort((a, b) => a.id - b.id);
        
      
      },
      error => {
       
        const errorCode:number = error.error.errorDetails.code;
        if(errorCode==3)
        this.tokenExpiredHandler();



      }
    );
  }

 
  handlechangestatus(index:any){
    if (this.admins[index].enabled==true){
      this.adminService.deactivateAdmin(this.admins[index].id).subscribe(
        (response: any) => {
  
          location.reload();
          
          
        

        },
        error => {
          const errorCode:number = error.error.errorDetails.code;
          if(errorCode==3)
          this.tokenExpiredHandler();
  
  
        }
      );
    }
    else{
      this.adminService.activateAdmin(this.admins[index].id).subscribe(
        (response: any) => {
  
          location.reload();
          
          // Login successful, navigation handled in AuthService
        
        }
      );
    }
    
  }

  tokenExpiredHandler()
  {
    this._router.navigate(['/login']);

  }
  addadminfunction()
  {
    
  }
 
}
