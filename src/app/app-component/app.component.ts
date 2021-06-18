import { Component } from '@angular/core';
import {SubjectOperation} from './subjectRxJs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ops:SubjectOperation
  ){
    ops.multicastExample();
  } 

}


