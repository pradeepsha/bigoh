let express = require('express');
let path = require('path');
let cors = require('cors');

let authRouter = require("./routes/auth");
let userRouter = require("./routes/user.js");
let app = express();
const port = 3000;

let bodyParser = require("body-parser");

// Enable CORS for all requests
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({
    limit: '2048mb', extended: true
}));

app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '2048mb', extended: true
  }));


app.use('/auth', authRouter);
app.use('/api/user/', userRouter);

const HOST = '127.0.0.1'

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

app.get('*',(req,res)=>{
    res.send('Hello, World!\n Pradeep');
})