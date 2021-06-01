import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {
  @Input() hero;
  sunset: string;
  sunrise: string;
  temp: string;
  tempMin: string;
  tempMax: string;
  visibility;
  description;
  dateToday: number = Date.now();

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.setWeatherData(this.hero);
  }
  // tslint:disable-next-line:typedef
  setWeatherData(data) {
    this.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    this.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    this.temp = (data.main.temp - 273.15).toFixed(0);
    this.tempMin = (data.main.temp_min - 273.15).toFixed(0);
    this.tempMax = (data.main.temp_max - 273.15).toFixed(0);
    this.visibility = (data.visibility / 1000).toFixed(0);
    this.description = data.weather[0].description;
  }


}
