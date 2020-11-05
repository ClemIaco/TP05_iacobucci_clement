import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';   
import { CustomvalidationsService } from '../services/custom-validations.service'; 

@Directive({
  selector: '[appEmailPattern]',    
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailPatternDirective, multi: true }]
})
export class EmailPatternDirective implements Validator {

  @Input('appEmailPattern') EmailValidator: string;  
    
  constructor(private customValidator: CustomvalidationsService) { }    
    
  validate(control: AbstractControl): { [key: string]: any } | null {    
    return this.customValidator.EmailValidator(this.EmailValidator)(control);    
  }  

}
