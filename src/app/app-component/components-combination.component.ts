import {Component} from '@angular/core';

@Component({
    selector: 'app-comp-combination-root',
    template: `
    <app-hero-form></app-hero-form>
    <app-metanit-form></app-metanit-form>
    <app-zippy (open)="onOpen($event)" (close)="onClose($event)"></app-zippy>
    `,
  })
  export class ComponentCombinationComponent{
    onOpen(event){
        console.log(`on open event: \n ${event}`)
      }
      onClose(event){
        console.log(`on close event: \n ${event}`)
      }
  }