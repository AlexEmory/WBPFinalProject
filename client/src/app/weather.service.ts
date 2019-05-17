import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeather(lat: string,long: string): Observable<object>{
    return this.http.get('http://localhost:3000/weather/' + lat + '&' + long);
  }
}
