import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app-component/app.component";
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { MetanitComponent } from "./metanit-form/metanit-form.component";
import { ZippyComponent } from "./app-zippy/app-zippy.component";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentCombinationComponent } from "./app-component/components-combination.component";
import  {LoaderElComponent} from "./app-loader-el/app-loader-el.component";
import { RestaurantComponent } from './app-restaurant/app-restaurant.component';
import { FormsDataComponent } from './forms-data/forms-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeroFormComponent,
    MetanitComponent,
    ZippyComponent,
    ComponentCombinationComponent,
    LoaderElComponent,
    RestaurantComponent,
    FormsDataComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

//tutorial path
// C:\Users\sergi\source\repos\mywebapp\angular-tour-of-heroes
