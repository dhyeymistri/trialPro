import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss'
})
export class ParentComponentComponent {
  msgToBeSent: string=""
  sendMsg(val: any){
    this.msgToBeSent = val;
  }
}
