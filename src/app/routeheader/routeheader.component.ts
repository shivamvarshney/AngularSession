import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-routeheader',
  templateUrl: './routeheader.component.html',
  styleUrls: ['./routeheader.component.css']
})
export class RouteheaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

}
