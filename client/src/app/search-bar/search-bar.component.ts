import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WeatherService} from '../weather.service'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  lat: string = "";
  long: string = "";
  weather: Object;
  ngOnInit() { }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { lat: '', long: '' }
    this.lat = f.controls['lat'].value;
    this.long = f.controls['long'].value;
    if (this.lat )
    if (f.valid) {
      this.weatherService.getWeather(this.lat,this.long)
      .subscribe(weather =>{
        this.weather=weather;
      });
      document.getElementById("weatherDis").style.visibility = "visible";
    }else{
      document.getElementById("notvalid").style.visibility = "visible";
    }
    
  }
}
