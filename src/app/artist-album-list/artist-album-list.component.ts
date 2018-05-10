import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  artistId:number;
  artistName:string;
  constructor(private _activatedRoutes:ActivatedRoute) { }

  ngOnInit() {
    this.artistId = this._activatedRoutes.snapshot.params.id;
    this.artistName = this._activatedRoutes.snapshot.params.name;
  }

}
