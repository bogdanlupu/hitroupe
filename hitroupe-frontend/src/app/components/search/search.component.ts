import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tags = ['football', 'volley', 'art', 'museum', 'doto', 'lol', 'drugs', 'girls'];

  constructor() {
  }

  ngOnInit() {
  }

}
