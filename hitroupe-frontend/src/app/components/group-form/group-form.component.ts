import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Group} from '../../models/Group';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  group = new Group(null, null, new Date(), null);
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(groupForm) {
    console.log(groupForm);
    // this.dataService.postData('url', groupForm);
  }

}
