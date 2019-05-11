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
    if (f.valid) {
      // FIXME: You shouldn't inject a component into another component (it's causing an error)
      // Try making a service instead.
      // this.weather.getWeather(this.lat, this.long)
    }
  }
}
