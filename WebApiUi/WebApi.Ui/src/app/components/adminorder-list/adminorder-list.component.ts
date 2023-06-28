import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderView } from 'src/app/models/orderView.model';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-adminorder-list',
  templateUrl: './adminorder-list.component.html',
  styleUrls: ['./adminorder-list.component.css']
})
export class AdminorderListComponent implements OnInit{
  showOrders: OrderView [] = [];
  useremail: string = '';
  constructor(private drugsServices: DrugsService,private router: Router){ }
  ngOnInit(): void {
    this.drugsServices.getAdminOrders()
    .subscribe({
      next: (showOrders:any) => {
        this.showOrders = showOrders;
        console.log(showOrders);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  getOrderByEmail(useremail: string) {
    this.drugsServices.getOrderByEmail(this.useremail)
    .subscribe({
      next: (showOrders:any) => {
        this.showOrders = showOrders;
        console.log(showOrders);
      },
      error: (response:any) => {
        console.log(response);
      }
    })
  }

}
