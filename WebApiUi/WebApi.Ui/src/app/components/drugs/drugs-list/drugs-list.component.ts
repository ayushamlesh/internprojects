import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drug } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drugs-list',
  templateUrl: './drugs-list.component.html',
  styleUrls: ['./drugs-list.component.css']
})
export class DrugsListComponent implements OnInit {
  
  drugs: Drug[] = [];
  name: string = '';
  drugDetails: Drug = {
    DrugId: 0,
    DrugName: '',
    // DrugDescription: '',
    DrugPrice: 0,
    DrugQuantityAvailable: 0,
    // SuccessMessage: ''
  }
  constructor(private drugsServices: DrugsService,private router: Router,private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.drugsServices.getDrugs()
    .subscribe({
      next: (drugs) => {
        this.drugs = drugs;
        console.log(drugs);
      },
      error: (response) => {
        console.log(response);
      }
    })


    this.route.paramMap.subscribe({
      next: (params) => {
        const DrugId = params.get('DrugId');
        if(DrugId) {
          this.drugsServices.getDrug(DrugId)
          .subscribe({
            next: (response) => {
              this.drugDetails = response;

            }
          })

        }
      }
    })
  }
  getDrugByName(name:string) {
    this.name = name;
    this.drugsServices.getDrugByName(this.name)
    .subscribe({
      next: (drugs) => {
        this.drugs = drugs;
        console.log(drugs);
      },
      error: (response) => {
        console.log(response);
      }
    })

  }

  deleteDrug(id: number) {
    this.drugsServices.deleteDrug(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['drugs'])
      },
      error: (response) => {
        //this.displayErrorAlert('LoginFailed: ' + response.message);
        alert("Failed to delete")
      }
    })
  }

}
