import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export function skuValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value.match(/^123/)) {
    return {invalidSku: true}; 
  }
  return null;
  };
}

@Component({
  selector: 'app-form-with-validations',
  templateUrl: './form-with-validations.component.html',
  styleUrl: './form-with-validations.component.scss'
})
export class FormWithValidationsComponent {
  myForm: FormGroup;
  sku:AbstractControl
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator(/^123/i)])]
    });
    this.sku = this.myForm.controls['sku'];
    console.log(this.sku);
  }

  onSubmit(fmVal: any): void{
    console.log(this.sku.errors);
    // console.log("you submitted value: ", fmVal);
    this.sku = this.myForm.controls['sku'];
    // console.log(this.sku);
  }
}
