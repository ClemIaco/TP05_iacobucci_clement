import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';   
import { CustomvalidationsService } from '../services/custom-validations.service';  

@Directive({
  selector: '[appCityPattern]',    
  providers: [{ provide: NG_VALIDATORS, useExisting: CityPatternDirective, multi: true }] 
})
export class CityPatternDirective implements Validator {  
  @Input('appCityPattern') CityValidator: string;  
    
  constructor(private customValidator: CustomvalidationsService) { }    
    
  validate(control: AbstractControl): { [key: string]: any } | null {    
    return this.customValidator.CityValidator(this.CityValidator)(control);    
  }  
}

