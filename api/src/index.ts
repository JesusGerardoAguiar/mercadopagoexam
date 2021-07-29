const cors = require('cors');
require('dotenv').config();
import * as express from 'express';
import * as bodyparser from 'body-parser';
// import cors from './util/cors';

import routes from './routes';

async function main() {
  const app = express();
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: [
        'Content-Type',
        'Authorization',
        'Content-Length',
        'X-Requested-With',
        'Origin',
        'Accept',
        'Authorization',
      ],
    }),
  );
  app.use(
    bodyparser.urlencoded({
      extended: false,
    }),
  );
  app.use(bodyparser.json({ limit: '50mb' }));

  app.use(routes);
  app.listen(process.env.PORT, () => {
    console.log('Express Ready');
  });
}

main();
