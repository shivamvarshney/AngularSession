import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<div><h1>Shivam {{title}}</h1></div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Classic';
  username:string;
  getUpdatedDate(){
    var dateObj = new Date();
    var datemessage = dateObj.getDate()+' / '+dateObj.getFullYear()+' / '+(dateObj.getMonth() + 1);
    return datemessage;
  }
  getUpdatedTime(){
    var timeObj = new Date();
    var timemessage = timeObj.getHours()+' / '+timeObj.getMinutes()+' / '+timeObj.getSeconds();
    return timemessage;
  }
  getDateAndTime(variableCheck){
     var dateObj = new Date();
     var messageString = '';
     if(variableCheck == 'date'){
        var messageString = dateObj.getDate()+' / '+dateObj.getFullYear()+' / '+(dateObj.getMonth() + 1);
     }else if(variableCheck == 'time'){
        var messageString = dateObj.getHours()+' / '+dateObj.getMinutes()+' / '+dateObj.getSeconds();
     }
     return messageString;
  }
}