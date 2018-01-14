import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common'
import { MainPageComponent } from '../../index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  constructor(private apiService: ApiService,private route: Router) { }

  ngOnInit() {
    
  }
  
  login(username,password){
    console.log(username+" "+password);
    this.apiService.get('api/users/verifUser/'+username+"&"+password).subscribe(res =>{
      console.log(res);
      if(res!='404')
        {
          this.route.navigateByUrl('/main-page');
          
        }
      else
        if(res=='User Not Found')
        alert("Wrong credentials");

    });
    
  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
