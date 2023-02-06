const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

app.get('/', 
    (request,response) => {
        console.log("Hit in /");
        response.send("Hey There, you with Express");
    }
)

app.get('/csea', 
    function(req,res){
        console.log("Hit in /csea");
        const content = `
            <body style="background-color:black; color: yellow">
                <h1>CSEA Backend</h1>
            </body>
        `
        res.send(content);
    }
)

const port = process.env.port;

mongoose.connect(process.env.mongo_link).then( 
    () => {
        app.listen(port, () => {
            console.log(`Server is Listening at http://localhost:${port}`);
            }
        )
    }
).catch(err => {console.log("Error : ",err)});

