import { Injectable } from '@angular/core';
import {Observable, Subject,from, ConnectableObservable } from 'rxjs';
import { multicast } from 'rxjs/operators';


//https://rxjs-dev.firebaseapp.com/guide/subject

@Injectable({
  providedIn: 'root'
})
export class SubjectOperation{


	public subjectNum = new Subject<number>();
	public numberObservable = from([1,2,3]);


	constructor(){
	
	}

	public subjectSubscibeExample(){

		this.subscribeToSubject(this.subjectNum);
		this.numberObservable.subscribe(this.subjectNum);
	}




	public subscribeToSubject(subj:Subject<number>):void{

		subj.subscribe({
			next:(val)=>{
				console.log('first subscriber');
				console.log(val);
			}
		});

		subj.subscribe({
			next:(val)=>{
				console.log('second subscriber');
				++val;
				console.log(val);
			}
		})
	}

	public multicastExample(){

		const source = from([1, 2, 3]);
		const subject = new Subject();
		const multicasted = source.pipe(multicast(subject))as ConnectableObservable<number>;
		 
		// These are, under the hood, `subject.subscribe({...})`:
		multicasted.subscribe({
			next: (v) => console.log(`observerA: ${v}`)
		});
		multicasted.subscribe({
			next: (v) => console.log(`observerB: ${v}`)
		});
		 
		// This is, under the hood, `source.subscribe(subject)`:
		multicasted.connect();

	}

	

}