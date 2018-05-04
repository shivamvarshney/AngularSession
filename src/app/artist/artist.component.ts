import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistName:string;
  constructor(private _activatedRoutes:ActivatedRoute) { }

  ngOnInit() {
     this.artistName = this._activatedRoutes.snapshot.params.name;
  }

}
