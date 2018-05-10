import { Injectable } from '@angular/core';
import {Http }  from '@angular/http';
import { IArtists } from './artists';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ServiceexampleService {
  private _url:string = "/assets/data/artists.json";
  
}
