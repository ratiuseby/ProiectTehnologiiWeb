import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ApiService } from '../../../service/index';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  items: Item[]=[];
  constructor(private apiService: ApiService) { 
    
  }

  ngOnInit() {
    this.apiService.get('api/items/').subscribe(res => {
      for (var i=0;i<res.length;i++)
      {
        console.log(res[i]);
        this.items.push(res[i]);
      }
      console.log('aici');
      console.log(res.length);
    });
  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  list=['a','b','c'];

  user="tavi";

  static loggedUser="";

  price:Number=0;


addItem(itemTest)
{
  this.price+=itemTest;
  console.log(this.price);
}

checkout(checkoutPrice)
{
  console.log("factura "+this.price+" lei");

  var invoice={
    idUser:5,
    sum:checkoutPrice

  }
  this.apiService.post('api/invoices',invoice).subscribe(res=>{
    console.log(res);
  });
  alert("Total price "+this.price+" lei. Thank you for purchasing!");
}
  

}

interface Item {
  id:number;
  name: string;
  price: string;
  
}
