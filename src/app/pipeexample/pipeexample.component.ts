import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  private dateVal:Date = new Date();
  private jsonVal:Object = { moo: 'foo', goo: { too: 'new' }};
  private usersList:Object = [
  {
    firstName:'shivam',
    lastName:'varshney'
  },
  {
    firstName:'ankit',
    lastName:'varshney'
  },
  {
    firstName:'calssic',
    lastName:'informatics'
  },
  {
    firstName:'shivam',
    lastName:'varshney'
  },
  ];
  imageUrl: string = "";
  searchData;
  constructor() { }

  ngOnInit() {
  }

}
