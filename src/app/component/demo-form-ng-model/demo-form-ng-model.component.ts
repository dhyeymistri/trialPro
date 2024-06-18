import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrl: './demo-form-ng-model.component.scss'
})
export class DemoFormNgModelComponent {
  productName: string

  constructor(){
    this.productName = "Laptop"
  }

  onSubmit(value: string): void{
    console.log("the submitted value is: ", value);
  }
}
