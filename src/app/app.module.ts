import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import * as dotenv from 'dotenv';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WeatherComponent } from './weather/weather.component';
import { Parser } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    express,
    morgan,
    bodyParser,
    HttpClient,
    response,
    dotenv,
    Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
