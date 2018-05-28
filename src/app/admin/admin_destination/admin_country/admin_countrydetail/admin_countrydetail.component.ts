import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ICountry } from '../../../../shared/model/country.model';
import { Admin_DestinationService } from '../../admin_destination.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'admin-countrydetail',
    templateUrl: './admin_countrydetail.component.html',
    styleUrls: ['./admin_countrydetail.component.scss'],
   
})

export class Admin_CountryDetailComponent implements OnChanges {
    @Input() country: ICountry;
    @Output() onUpdate = new EventEmitter<ICountry>();
    
    id : string;
    name : string;
    rate : number;

    load(){
        if(this.country != null){
            this.id = this.country.id;
            this.name = this.country.name;
            this.rate = this.country.rate;
        }
        else
        {
            this.id = '';
            this.name = '';
            this.rate = 0;
        }
    }
    countryForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private admin_destinationService: Admin_DestinationService, private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    
    createForm() {
        this.countryForm = this.fb.group({
            id:'',
            name:'',
            rate :''
        });
    }

    ngOnChanges() {
        this.load();
        this.countryForm.reset({ 
            name: this.name,
            rate : this.rate
        });
        
    }

    onSubmit() {
        this.country = this.prepareSaveCountry();
        //this.service.updateCategory(this.category).subscribe(/* error handling */);
        if(this.country != null){

            this.admin_destinationService.updateCountry(this.prepareSaveCountry()).subscribe(
                country => {
                    this.onUpdate.emit(country); 
                }
            );           
        }        

        else{
            this.admin_destinationService.createCountry(this.prepareSaveCountry()).subscribe(
                country => {
                    this.onUpdate.emit(country); 
                    //this.country = country;
                }
            );
        }
        
        this.ngOnChanges();
        
       
    }

    prepareSaveCountry(): ICountry {
        const formModel = this.countryForm.value;
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
    

        const saveCountry: ICountry = {
            id: this.id,
            name: formModel.name as string,
            rate: formModel.rate as number
           
        };
        
        return saveCountry;
    }

    revert(ev) { 
        ev.preventDefault();
        this.ngOnChanges(); 
    }

}