import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  url = 'http://api.openweathermap.org/data/2.5/group?id=1248991,1850147,2644210,2988507,2147714,4930956,1796236,1796236&units=matric&appid=292b66342c78f6a458f08686f74a1618';
  apiUrl = 'http://api.openweathermap.org/data/2.5/group?id=';
  // tslint:disable-next-line:typedef
  getdata() {
    return this.http.get(this.url);
  }
  // tslint:disable-next-line:typedef
  getCurentData(city) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.openweathermap.org/data/2.5/group?id=' + city + '&units=matric&appid=292b66342c78f6a458f08686f74a1618');
  }
  // tslint:disable-next-line:typedef
  getCurentCity(city) {
    console.log('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=292b66342c78f6a458f08686f74a1618');
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=292b66342c78f6a458f08686f74a1618');
  }
}
