import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  dettails: any;
  curentWeather: any;
  sunset: string;
  sunrise: string;
  temp: string;
  tempMin: string;
  tempMax: string;
  visibility;
  description;
  dateToday: number = Date.now();

  constructor(private service: SharedService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurentWeather();
  }
  // tslint:disable-next-line:typedef
  getCurentWeather() {
    this.service.getCurentData(this.router.snapshot.params.id).subscribe((res) => {
      this.dettails = res;
      this.curentWeather = this.dettails.list[0];
      console.log(this.curentWeather);
      this.setCurentData(this.curentWeather);
      return this.curentWeather;
    });
  }
  // tslint:disable-next-line:typedef
  setCurentData(data) {
    this.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    this.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    this.temp = (data.main.temp - 273.15).toFixed(0);
    this.tempMin = (data.main.temp_min - 273.15).toFixed(0);
    this.tempMax = (data.main.temp_max - 273.15).toFixed(0);
    this.visibility = (data.visibility / 1000).toFixed(0);
    this.description = data.weather[0].description;
  }

}
