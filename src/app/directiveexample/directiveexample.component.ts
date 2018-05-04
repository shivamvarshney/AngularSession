import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveexample',
  templateUrl: './directiveexample.component.html',
  styleUrls: ['./directiveexample.component.css']
})
export class DirectiveexampleComponent implements OnInit {

  conditionCheck:boolean = false;
  favoriteLanguages = [
    {'name':'HTML','type':'frontend'},
    {'name':'Node JS','type':'backend'},
    {'name':'JavaScript','type':'frontend'},
    {'name':'Php','type':'backend'},
    {'name':'CSS','type':'frontend'},
    {'name':'DotNet','type':'backend'}
  ]
  constructor() { }

  ngOnInit() {
  }
  updatecondition(){
    this.conditionCheck = !this.conditionCheck;
  }
  /*
  function printHelloWithPromise() {
	let promise = new Promise(function(resolve, reject) {        
		const responseVar = 1+1;
		if(responseVar == 2) {
		  resolve("Success: ");
		} else {
		  reject("Error: ");
		}
	});
	return promise;
  }
	let greetingPromise = printHelloWithPromise();
	greetingPromise.then(function(resolveOutput) {
		console.log(resolveOutput);
	}, function(rejectOutput) {
		console.log(rejectOutput);
	});
  */
}
