import {Injectable} from '@angular/core';
import {Group} from '../../models/Group';

@Injectable()
export class ShareService {
  public groups: Group[];
  constructor() {
  }
}
