import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { ChildComponent } from './child/child.component';
import { ChildnewComponent } from './childnew/childnew.component';
import { ParentnewComponent } from './parentnew/parentnew.component' ;  
import { ServiceexampleService } from './serviceexample.service';
import { HttpModule } from '@angular/http';
import { ForsexampleComponent } from './forsexample/forsexample.component';
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
    path:'artist',
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
    path:'childNew',
    component:ParentnewComponent 
  },
  {
    path:"forms",
    component:ForsexampleComponent
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
    ChildComponent,
    ChildnewComponent,
    ParentnewComponent,
    ForsexampleComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ServiceexampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }