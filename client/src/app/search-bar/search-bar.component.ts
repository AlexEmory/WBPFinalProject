import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherComponent } from '../weather/weather.component';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  lat: string = "";
  long: string = "";
  ngOnInit(

  ) {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { lat: '', long: '' }
    this.lat = f.controls['lat'].value;
    this.long = f.controls['long'].value;
    if (this.lat )
    if (f.valid) {
      WeatherComponent.getWeather(this.lat, this.long);
    }
  }
}
