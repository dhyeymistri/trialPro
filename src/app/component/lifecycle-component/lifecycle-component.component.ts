import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-component',
  templateUrl:'./lifecycle-component.component.html',
  styleUrl: './lifecycle-component.component.scss'
})
export class LifecycleComponentComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterContentChecked, AfterContentInit,AfterViewChecked,AfterViewInit{
  counter:number;
  constructor(){
    console.log('AllHooks Component---------------[constructor]');
    this.counter = 1;
  }

  inc(){
    console.log('AllHooksComponent-------------------[counter]');
    this.counter++;
  }
  
  ngOnInit(): void {
      console.log('AllhooksComponent ------- On init');
  }

  ngOnDestroy(): void {
      console.log('AllhooksComponent ------- On destroy');
  }

  ngDoCheck(): void {
    console.log('AllhooksComponent ------- Do check');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AllhooksComponent ------- On changes');
    // console.log(changes);
  }

  ngAfterContentChecked(): void {
    console.log('AllhooksComponent ------- after content checked');
  }

  ngAfterContentInit(): void {
    console.log('AllhooksComponent ------- after content init');
  }

  ngAfterViewChecked(): void {
    console.log('AllhooksComponent ------- after view checked');
  }

  ngAfterViewInit(): void {
    console.log('AllhooksComponent -------- after view init');
  }

}
