import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DirectiveexampleComponent } from './directiveexample/directiveexample.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustompipeexamplePipe } from './custompipeexample.pipe';
import { SearchByPipe } from './search-by.pipe';
import { RoutingexampleComponent } from './routingexample/routingexample.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RouteheaderComponent } from './routeheader/routeheader.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component' ;
const approutes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'directive',
    component:DirectiveexampleComponent 
  },
  {
    path:'routing',
    component:RoutingexampleComponent 
  },
  {
    path:'artist/:name',
    //path:'artist/:name:id',
    component:ArtistComponent 
  },
  {
    path:'search',
    //component:SearchComponent ,
    pathMatch:'prefix', // Angular take default, and checks the perfect match, which consums all of the routes
    //pathMatch:'full', // It checks the complete url
    children : [
      {
        path:':name',
        component:ArtistTrackListComponent
      },
      {
        path:':name/:id',
        component:ArtistAlbumListComponent
      }
    ]
  },
  {
    path:'artisttrack',
    component:ArtistTrackListComponent 
  },
  {
    path:'artistalbum',
    component:ArtistAlbumListComponent 
  },
  {
    path:'parent',
    component:ParentComponent 
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    DirectiveexampleComponent,
    PipeexampleComponent,
    CustompipeexamplePipe,
    SearchByPipe,
    RoutingexampleComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    HomeComponent,
    SearchComponent,
    RouteheaderComponent,
    PagenotfoundComponent,
    ParentComponent,
    ChildComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }