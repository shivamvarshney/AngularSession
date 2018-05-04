import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-routingexample',
  templateUrl: './routingexample.component.html',
  styleUrls: ['./routingexample.component.css']
})
export class RoutingexampleComponent implements OnInit {

  constructor(private _router:Router) { 
    
  }

  ngOnInit() {
    
  }

}
