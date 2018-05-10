import { Component,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-childnew',
  templateUrl: './childnew.component.html',
  styleUrls: ['./childnew.component.css']
})
export class ChildnewComponent {
  message:string = "Hello From Child";
  @Output() messageEvent = new EventEmitter<String>();
  constructor() { }
  ngOnInit() {
  }
  sendMessage(){
    this.messageEvent.emit(this.message);
  }
}
