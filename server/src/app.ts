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
    console.log(`Server is running on port ${port}`);
  });
}

// Calls the start server function when the module loads.
// If connections the a database need to be established before serving HTTP traffic,
// they should be configured before calling startServer
startServer();