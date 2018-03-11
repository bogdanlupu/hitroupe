import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../services/some/share.service';
import {DataService} from '../../services/data/data.service';
import {toPromise} from 'rxjs/operator/toPromise';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tags = ['football', 'volley', 'art', 'museum', 'doto', 'lol', 'drugs', 'girls'];

  constructor(private share: ShareService,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    const _this = this;
    document.getElementById('search').addEventListener('keypress', function (e) {
      const key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        console.log(document.getElementById('search').innerText);
        _this.dataService.fetchData('http://localhost:3000/group?title=' + document.getElementById('search').value).subscribe(data => {
          _this.share.groups = data.Items;
          _this.router.navigate(['groups']);
        });
      }
    });
  }


}
