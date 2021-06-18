import { Component, OnInit } from '@angular/core';

export class Dish{
  constructor(
    public id?:number,
    public name?:string,
    public prise?:number,
    public time?:number
  ){
  }
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './app-restaurant.component.html',
  styleUrls: ['./app-restaurant.component.css']
})

export class RestaurantComponent implements OnInit {

  constructor() { }
  dishes:any = [];
  title = "Restaurant title";
  selectedDish:Dish = new Dish();
  showAddInputs:boolean = false;

  ngOnInit(): void {
    this.dishes = [
      {
        id:1,
        name:"dishName1",
        prise:123,
        time:30
      },
      {
        id:2,
        name:"dishName2",
        prise:123,
        time:30
      },
      {
        id:3,
        name:"dishName3",
        prise:123,
        time:30
      },
    ];

  }
  setShowAddInputs(){
    this.showAddInputs=true;
  }
  save(){
    if(this.selectedDish){
      if(this.selectedDish.id==null){
        this.selectedDish.id = Date.now();
        this.dishes.push(this.selectedDish);
      }else{
        this.selectedDish = new Dish();
      }
      this.showAddInputs = false;
    }
   
  }
  editDish(id:number){
    this.showAddInputs = true;
    this.selectedDish = this.dishes.find(el=>el.id == id);
  }
  deleteDish(id:number){
    this.dishes =this.dishes.filter(el=>el.id != id);
  }
  

}
