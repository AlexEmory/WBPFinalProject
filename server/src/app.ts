import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { Request, Response, constructor } from 'express';


const https= require('https');
dotenv.config();

const request1 = require('request');
const KEY = process.env.KEY|| '';
var weather :Object;

function startServer() {
  const app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const port = process.env.PORT || 3000;



  app.get('/weather', async (request: Request, response: Response) => {
    const lat = request.params.lat;
    const long = request.params.long;
    try{
      request1('https://api.darksky.net/forecast/' + KEY + '/' + lat + ',' + long, function (error, response,body){
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body', body);
      });
    }catch(error){
      console.error(error);
      response.status(500);
    }
  })

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

// Calls the start server function when the module loads.
// If connections the a database need to be established before serving HTTP traffic,
// they should be configured before calling startServer
startServer();