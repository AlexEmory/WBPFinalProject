import { Component } from '@angular/core';
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

function startServer() {
  const app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('Server is running on port ${port}');
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Weather App';

  
}
