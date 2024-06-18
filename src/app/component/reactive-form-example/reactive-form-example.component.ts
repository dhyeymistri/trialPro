import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.scss'
})
export class ReactiveFormExampleComponent {
  name = new FormControl('');
}
