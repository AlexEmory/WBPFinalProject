import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { Request, Response, constructor } from 'express';


const https= require('https');
dotenv.config();

const request1 = require('request');
const KEY = process.env.KEY|| '';

function startServer() {
  const app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const port = process.env.PORT || 3000;



  app.get('/weather/:lat&:long', async (request: Request, response: Response) => {
    const lat = request.params.lat;
    console.log(lat);
    const long = request.params.long;
    console.log(long);
    var getRequest= 'https://api.darksky.net/forecast/' + KEY + '/' + lat + ',' + long;
    console.log(getRequest);
    try{
      https.get(getRequest, (res:any)=>{
        console.log('statusCode: ', res.statusCode);
        console.log('headers:', res.headers);
        var body = '';
        res.on('data', function(chunk:object) {
          body += chunk;
        });
        res.on('end', function() {
          console.log(body);
          response.send(body);
        });
      }).on('error',(e:Error) => {
        console.error(e);
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