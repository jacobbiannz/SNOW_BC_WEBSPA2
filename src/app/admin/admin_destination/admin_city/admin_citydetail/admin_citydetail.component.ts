import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ICountry } from '../../../../shared/model/country.model';
import { Admin_DestinationService } from '../../admin_destination.service';
import { Observable } from 'rxjs/Observable';
import { CityComponent } from '../../../../website/destination/city/city.component';
import { ICity } from '../../../../shared/model/city.model';
import { ProvienceRoutingModule } from '../../../../website/destination/provience/provience-routing.module';
import { NumberSymbol } from '@angular/common';

@Component({
    selector: 'admin-citydetail',
    templateUrl: './admin_citydetail.component.html',
    styleUrls: ['./admin_citydetail.component.scss'],
   
})

export class Admin_CityDetailComponent implements OnChanges {
    @Input() city: ICity;
    @Input() countryId: string;
    @Input() provienceId: string;

    @Output() onUpdate = new EventEmitter<ICity>();

    cityForm: FormGroup; 

    constructor(private admin_destinationService: Admin_DestinationService, private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    
    createForm() {
        this.cityForm = this.fb.group({
            id:'',
            name:'',
            rate :''
        });
    }

    ngOnChanges() {
        this.rebuildForm();
    }

    rebuildForm() {
       
        this.cityForm.reset(
            {
            name: this.city.name,
            rate: this.city.rate
            }
        );
       
    }

    onSubmit() {
        this.city = this.prepareSaveCity();
        //this.service.updateCategory(this.category).subscribe(/* error handling */);
        if(this.city != null){

            this.admin_destinationService.updateCity(this.countryId, this.provienceId, this.prepareSaveCity()).subscribe(
                city => {
                    this.onUpdate.emit(city); 
                }
            );           
        }        

        else{
            this.admin_destinationService.createCity(this.countryId, this.provienceId, this.prepareSaveCity()).subscribe(
                city => {
                    this.onUpdate.emit(city); 
                    //this.country = country;
                }
            );
        }
        
        this.rebuildForm();
    }

    prepareSaveCity(): ICity {
        const formModel = this.cityForm.value;
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
    
        const saveCity: ICity = {
            id: this.city.id,
            name: formModel.name as string,
            rate: formModel.rate as number,
            mainImageId : this.city.mainImageId
        };
        
        return saveCity;
    }

    revert(ev) { 
        ev.preventDefault();
        this.rebuildForm(); 
      
    }


}