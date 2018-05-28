import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ICountry } from '../../../../shared/model/country.model';
import { Admin_DestinationService } from '../../admin_destination.service';
import { Observable } from 'rxjs/Observable';
import { IProvience } from '../../../../shared/model/provience.model';

@Component({
    selector: 'admin-proviencedetail',
    templateUrl: './admin_proviencedetail.component.html',
    styleUrls: ['./admin_proviencedetail.component.scss'],
   
})

export class Admin_ProvienceDetailComponent implements OnChanges {
    @Input() provience: IProvience;
    @Input() countryId: string;
    @Output() onUpdate = new EventEmitter<IProvience>();
    
    provienceForm: FormGroup;

    constructor(private admin_destinationService: Admin_DestinationService, private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    
    createForm() {
        this.provienceForm = this.fb.group({
            id:'',
            name:'',
            rate :''
        });
    }

    ngOnChanges() {
        this.rebuildForm();
    }
     
    rebuildForm() {
        
        this.provienceForm.reset(
            {
            name: this.provience.name,
            rate: this.provience.rate
            }
        );
       
    }

    onSubmit() {
        this.provience = this.prepareSaveProviencve();
        if(this.provience != null){

            this.admin_destinationService.updateProvience(this.countryId, this.prepareSaveProviencve()).subscribe(
                provience => {
                    this.onUpdate.emit(provience); 
                    //this.provience = provience;
                }
            );           
        }        

        else{
            this.admin_destinationService.createProvience(this.countryId, this.prepareSaveProviencve()).subscribe(
                provience => {
                    this.onUpdate.emit(provience); 
                    //this.provience = provience;
                }
            );
        }

        this.rebuildForm();
    }

    prepareSaveProviencve(): IProvience {
        const formModel = this.provienceForm.value;

        const saveProvience: IProvience = {
            id: this.provience.id,
            name: formModel.name as string,
            rate: formModel.rate as number,
            cities:null
           
        };
        
        return saveProvience;
    }

    revert(ev) { 
        ev.preventDefault();
        this.rebuildForm(); 
      
    }

}