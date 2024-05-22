import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
const port = 3000;

app.use(express.json());
app.use();

app.get('/', (req: Request, res: Response) => {
  var a = 10;

  res.send(a);
});

export default app;
