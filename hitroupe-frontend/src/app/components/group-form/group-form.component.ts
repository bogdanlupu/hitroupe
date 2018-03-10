import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Group} from '../../models/Group';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  group = new Group(null, null, new Date(), null, null, null);
  initial_lat = 0;
  initial_lon = 0;
  radius = 0;
  max = 10000;
  min = 0;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    const _this = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      _this.initial_lat = position.coords.latitude;
      _this.initial_lon = position.coords.longitude;
      _this.group.latitude = _this.initial_lat;
      _this.group.longitude = _this.initial_lon;
    });
  }

  setCoordinates(latitude, longitude) {
    this.group.latitude = latitude;
    this.group.longitude = longitude;
  }

  onSubmit(groupForm) {
    const _this = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      _this.setCoordinates(position.coords.latitude, position.coords.longitude);
    });
  }

  placeMarker($event) {
    this.setCoordinates($event.coords.lat, $event.coords.lng);
  }
}
