import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from './../service/shared.service';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  cityName: string;
  data: any;
  search: string;
  cityData: any;
  have = false;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  searchCity() {
    console.log('it does nothing', this.search);
    this.service.getCurentCity(this.search).subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(this.data);
      this.have = true;
    });
  }

}
