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
  weather: object = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getWeather(lat: string, long: string) {
    console.log("Weather componenet:", lat, ",", long);
    this.http.get('https://api.darksky.net/forecast/' + KEY + '/' + lat + ',' + long)
    // FIXME: subscribe takes a function - see the RxJS lecture on Panopto for reference
      .subscribe(this.weather = response.get);
  }
}
