import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCart } from 'src/app/models/addcart.model';
import { Drug } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-display-drug',
  templateUrl: './display-drug.component.html',
  styleUrls: ['./display-drug.component.css']
})
export class DisplayDrugComponent implements OnInit{
  drugname: string = '';
  reqQuantity: number[] = [];
  drugsDisplay: Drug[] = [];
  addCartModel: AddCart = {
    drugId: 0,
    ReqQuantity: 0
  }
  constructor(private drugsServices: DrugsService,private router: Router){ }
  ngOnInit(): void {
    this.drugsServices.getDrugs()
    .subscribe({
      next: (drugs) => {
        this.drugsDisplay = drugs;
        console.log(drugs);
      },
      error: (response) => {
        console.log(response);
      }

    })
  }
  getDrugByDrugName(name: string)
  {
    this.drugsServices.getDrugByName(this.drugname)
    .subscribe({
      next: (drugs) => {
        this.drugsDisplay = drugs;
        console.log(drugs);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  postCart(id:number,reqQuantity:number)
  {
    this.addCartModel.drugId=id;
    this.addCartModel.ReqQuantity=reqQuantity;
    this.drugsServices.postCart(this.addCartModel)
    .subscribe({
      next: (response) => {
        console.log(response);
        alert("Fail");
      },
      error: (response) => {
        console.log(response);
        alert("Success")
        this.router.navigate(['displaydrug']);
      }
    })
  }

  }



