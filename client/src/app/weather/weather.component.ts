import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const KEY = environment.KEY;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  lat: string;
  long: string;
  static weather: object = null;
  constructor(private http: HttpClient) { 
  }
  
  ngOnInit() {
  }

  static getWeather(lat: string, long: string) {
    this.weather=this.http.get('localhost:3000/weather?lat=' + lat + '&long=' + long);
  }
}
