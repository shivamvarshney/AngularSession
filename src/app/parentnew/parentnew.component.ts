import { Component } from '@angular/core';

@Component({
  selector: 'app-parentnew',
  templateUrl: './parentnew.component.html',
  styleUrls: ['./parentnew.component.css']
})
export class ParentnewComponent {

  message:string;
  constructor() { }

  ngOnInit() {
  }
  receiveMessage($event){
    this.message = $event;
  }

}
