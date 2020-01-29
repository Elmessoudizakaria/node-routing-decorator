import 'reflect-metadata';
import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import { decoratorToRoute } from './config';

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello there!');
});

// reflect meta data decorator to routes
decoratorToRoute(app);

app.listen(4000, () => {
  console.log('Started express on port 3000');
});
