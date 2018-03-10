import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  fetchData(url) {
    const headers = new HttpHeaders();
    headers.append('authorization', sessionStorage.getItem('authorization'));
    return this.http.get(`${url}`)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  postData(url, jsonObject) {
    // console.log(url, jsonObject);
    let headers = new HttpHeaders();
    if (sessionStorage.getItem('authorization') !== '') {
      headers.append('authorization', sessionStorage.getItem('authorization'));
    }
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(url, jsonObject, {headers: headers}).catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteData(url) {
    return this.http.delete(url).catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
