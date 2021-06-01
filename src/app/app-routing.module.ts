import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'city/:id', component: CityWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
