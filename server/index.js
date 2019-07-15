import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import {routes} from './router';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Mongoose
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/tasks',{
    useNewUrlParser:true,
    useFindAndModify:false
});

//middleware
 //app.use('/blog', (req,res,next)=>{
 //    console.log(`execute middleware routine`);
  //   next();
// });

routes(app);

app.get('/', (req,res,next)=>{
    console.log(`get request`);
    res.send('<h1>Your List with Tasks</h1>');
});

app.listen(PORT,HOST, ()=>{
    process.stdout.write(`Listen on ${HOST}:${PORT}`);
});

