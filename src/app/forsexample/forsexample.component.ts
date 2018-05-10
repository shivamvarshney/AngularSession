import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-forsexample',
  templateUrl: './forsexample.component.html',
  styleUrls: ['./forsexample.component.css']
})
export class ForsexampleComponent implements OnInit {
  message1:string;
  message2:string;
  message3:string;
  rRegForm: FormGroup;
  message4:string;
  firstName = new FormControl("", Validators.required);
  constructor(private builder: FormBuilder) { 
    
  }
  ngOnInit() {
    this.rRegForm = this.builder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      lastName: '',
      email:['',Validators.compose([Validators.required,Validators.email/*, this.validateEmail()*/])]
    });
  }
  validateEmail() {
    //I code for custom validation
  }
  register() {
    console.log(this.rRegForm.value);    
    let data = this.rRegForm.value;
    //Send this data to a service
  }
  reset() {
    this.rRegForm.patchValue({
      firstName: '',
      lastName: '',
      email: ''
    })
  }
  submitForm1(){
    this.message1 = "Form submitted Successfully.";
  }
  submitForm2(obj){
    this.message2 = obj;
    if(obj.gender == 'm'){
      this.message3 = "Hello Mr. "+obj.username;
    }else{
      this.message3 = "Hello Miss. "+obj.username;
    }
    if(obj.terms){
       this.message3 = this.message3+", thanks for selecting terms and conditions.";
    }else{
       this.message3 = this.message3+", please select terms and conditions to process.";      
    }
  }
   onSubmit(obj){
     this.message4 = obj;
   }
}
