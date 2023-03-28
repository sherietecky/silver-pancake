import express, { Express, Request, Response, NextFunction } from 'express';

const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World from Express!');
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});