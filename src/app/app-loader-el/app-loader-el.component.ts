import {Component,OnInit,Input,Output} from "@angular/core";
import { rejects } from "assert";
import { of } from 'rxjs'; 
import { concatMap } from 'rxjs/operators';

//wait for observable
// https://jasonwatmore.com/post/2020/09/19/rxjs-wait-for-promise-to-resolve-with-observable

//bootstrap
// https://getbootstrap.com/docs/5.0/layout/grid/

//width
//https://developer.mozilla.org/en-US/docs/Web/CSS/width



@Component({
    selector:'app-loader-el',
    template:`

        <div *ngIf="loading" class="row justify-content-center">
            <img class="loader-el" src="{{imagePath}}" alt="loading element"/>
        </div>

        <div class="row justify-content-between">
            <div class="col-sm-3">
                <h1>{{message}}</h1>
                <ul>
                    <li *ngFor="let item of items">{{item}}</li>
                </ul>
            </div>
            <div class="col-sm-3">
                <label>Add new item: <input #newItem /></label>
                <button class="btn btn-primary" (click)="addNewItem(newItem.value)">
                    add item
                </button>
            </div>
        </div>

        
    `,
    styles:[`
        .loader-el{
            position:absolute;
            width:20%;
            z-index:100;
        }
    `]
})
export class LoaderElComponent implements OnInit{
    constructor(){

    }
    items=["some data"];
    message:string;

    loading:boolean=false;
    imagePath:string="http://cdn.lowgif.com/full/4cc179357c1a95d2-.gif";

    ngOnInit() {
        this.loading = true;
        const observable = of("Heading value");
        observable.pipe(concatMap(value=>{
            return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                   resolve(value)
               },2000); 
            })
        })).subscribe((data:string)=>{
            this.message = data;
            if(data){
                this.loading = false;
            }
        });
        
    }
    
    addNewItem(newItem:string):void{
        this.loading = true;
        const observable = of(newItem);
        observable.pipe(concatMap(value=>{
            return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                   resolve(value)
               },2000); 
            })
        })).subscribe((data:string)=>{
            this.items.push(data);
            if(data){
                this.loading = false;
            }
        });
        

    }



}