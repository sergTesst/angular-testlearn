import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



    // template: `
  //   Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  // `

@Component({
  selector: 'app-forms-data',

  templateUrl: './forms-data.component.html',
  styleUrls: ['./forms-data.component.css']

})
export class FormsDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  favoriteColorControl = new FormControl('');
  public dataControl = new FormControl('');

}
