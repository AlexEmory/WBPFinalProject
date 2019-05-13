import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  lat: string;
  long: string;
  weather: object = null;
  constructor(private weatherService : WeatherService) { 
  }
  
  ngOnInit() {
  }

   getWeather(lat:string,long:string):void {
    this.weatherService.getWeather(lat,long)
    .subscribe(weather =>{
      this.weather=weather;
      console.log(weather);
    });
  }
}
