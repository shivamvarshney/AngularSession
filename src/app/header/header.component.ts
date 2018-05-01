import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message1:string; 
  
  message2:string;
  userfullname:string;
  
  message3:string;
  firstNo:number;
  secondNo:number;
  
  headingStyle:any = {"text-align":"center","text-decoration":"underline"}
  peragraphStyle:any = {"color":"blue"}
  
  userName:string;
  gender:string;
  genderMessage:string;
  genderStyle:any = {}
  constructor() { }

  ngOnInit() {
  }
  
  getMessage(){
     this.message2 = 'Hello '+this.userfullname;
  }
  calculate(param){
     if(param == 'sum'){
	    this.message3 = `The sum of ${this.firstNo} and ${this.secondNo} is ${this.firstNo + this.secondNo}`;
	 }else if(param == 'bigger'){
	    var largerNo = (this.firstNo > this.secondNo)?this.firstNo:this.secondNo;
		this.message3 = 'The larger no is '+largerNo;
	 }
  }
  getGenderMessage(){
     if(this.gender == 'male'){
	    this.genderStyle = {"color":"blue"}
		this.genderMessage = "Hello Mr. "+this.userName;
	 }else{
	    this.genderStyle = {"color":"green"}
		this.genderMessage = "Hello Miss. "+this.userName;
	 }
  }

}
