import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common'
import { ApiService } from '../../../service/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  register(username:string,password:string,confirmPassword)
  {
    console.log(username+" "+password+" "+confirmPassword);
    if(password.localeCompare(confirmPassword)==0)
    {
      var user= {
        username: username,
        password: password
      };
      this.apiService.post('api/users',user).subscribe(result =>{
        console.log(result);
      })
      this.route.navigateByUrl('/home');
    }
    else
    {
      console.log("password doesnt match");
      alert("Passwords don't match.")
    }
    

  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
