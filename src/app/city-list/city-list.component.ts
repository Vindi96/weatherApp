import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  constructor(private http: HttpClient, private service: SharedService) { }
  allWeather: any = [];
  weatherData: any = [];


  ngOnInit(): void {
    this.getWeatherData();
  }
  // tslint:disable-next-line:typedef
  getWeatherData() {
    this.service.getdata().subscribe((res) => {
      console.log(res);
      this.allWeather = res;
      this.weatherData = this.allWeather.list;
      console.log(this.weatherData);
      return this.weatherData;
    });

  }

}
