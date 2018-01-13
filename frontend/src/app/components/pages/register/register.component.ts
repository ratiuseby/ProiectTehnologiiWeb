import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  register(username,password,confirmPassword)
  {
    console.log(username+" "+password+" "+confirmPassword);
    this.route.navigateByUrl('/home');

  }

}
