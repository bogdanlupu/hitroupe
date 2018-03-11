import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Group} from '../../models/Group';
import {ShareService} from '../../services/some/share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @Input()
  groups: Group[];
  // groups =
  //   [
  //     new Group('Title1', 'Description1', new Date(),  12, 0, 12, 12, 'Mike', 0),
  //     new Group('Title2', 'Description2', new Date(),  12, 5, 12, 12, 'J0hn', 2),
  //     new Group('Title3', 'Description3', new Date(),  12, 8, 12, 12, 'Tilda', 100)
  //   ];
  constructor(private share: ShareService,
              private dataService: DataService,
              private router: Router) {
    this.groups = this.share.groups;
    console.log(this.groups);
  }

  ngOnInit() {

  }

}
