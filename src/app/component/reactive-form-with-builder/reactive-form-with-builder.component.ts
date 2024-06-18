import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-builder',
  templateUrl: './reactive-form-with-builder.component.html',
  styleUrl: './reactive-form-with-builder.component.scss'
})
export class ReactiveFormWithBuilderComponent {
  myForm: FormGroup;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['ABC123'],
      'ff': ['nothinb'],
    });
  }

  onSubmit(fmVal: any): void{
    console.log("you submitted value: ", fmVal);
  }
}
