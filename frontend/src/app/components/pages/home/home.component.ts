import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common'
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
    this.route.navigateByUrl('/main-page');
  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
