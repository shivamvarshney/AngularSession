import { Component, OnInit } from '@angular/core';
import { ServiceexampleService } from '../serviceexample.service'
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artistsList = [];
  artistName:string;
  constructor(private artistService:ServiceexampleService) { }
  ngOnInit() {
  
  }   
}
