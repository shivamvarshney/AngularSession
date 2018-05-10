import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  artistName:string;
  constructor(private _activatedRoutes:ActivatedRoute) { }

  ngOnInit() {
    this.artistName = this._activatedRoutes.snapshot.params.name;
  }

}
