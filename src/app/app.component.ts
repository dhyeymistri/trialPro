import { Component, ɵɵNgOnChangesFeature } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'trialPro';

  disp: boolean
  constructor(){
    this.disp = true;
  }

  toggle(){
    this.disp = !this.disp;
  }
}
