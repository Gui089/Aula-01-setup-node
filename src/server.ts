import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(3333, () => {
    console.log('http server running');
});

app.get("/", (req:Request, res:Response) => {
    res.send("Hello node");
});