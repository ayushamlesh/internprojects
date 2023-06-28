import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Drug } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.css']
})
export class EditDrugComponent implements OnInit{
  drugDetails: Drug = {
    DrugId: 0,
    DrugName: '',
    // DrugDescription: '',
    DrugPrice: 0,
    DrugQuantityAvailable: 0,
    // SuccessMessage: ''
  }
  constructor(private route: ActivatedRoute,private drugService: DrugsService,private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const DrugId = params.get('DrugId');
        if(DrugId) {
          this.drugService.getDrug(DrugId)
          .subscribe({
            next: (response) => {
              this.drugDetails = response;

            }
          })

        }
      }
    })
  }
  updateDrug() {
    this.drugService.updateDrug(this.drugDetails.DrugId,this.drugDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['drugs']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  deleteDrug(id: number) {
    this.drugService.deleteDrug(id)
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
