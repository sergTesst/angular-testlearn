import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//so the app can have routing functionality
import { ComponentCombinationComponent } from "../app-component/components-combination.component";
import  {LoaderElComponent} from "../app-loader-el/app-loader-el.component";
import { RestaurantComponent } from "../app-restaurant/app-restaurant.component";

const routes:Routes =[
  { path: 'comp-combination', component: ComponentCombinationComponent },
  { path: 'loader-elem', component: LoaderElComponent },
  { path: 'restaurant', component: RestaurantComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
