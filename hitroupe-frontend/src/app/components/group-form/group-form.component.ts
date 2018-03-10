import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Group} from '../../models/Group';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  group = new Group(null, null, new Date(), null, null, null);
  constructor(private dataService: DataService) { }

  ngOnInit() {
    const _this = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      _this.setCoordinates(position.coords.latitude, position.coords.longitude);
    });
  }

  setCoordinates(latitude, longitude) {
    this.group.latitude = latitude;
    this.group.longitude = longitude;
  }

  onSubmit(groupForm) {
    console.log(groupForm);
    console.log(this.group);
    const _this = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      _this.setCoordinates(position.coords.latitude, position.coords.longitude);
    });
    // this.
  }

}
