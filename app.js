

'use strict';

// Imports dependencies and set up http server
const request = require('request'),
express = require('express'),
body_parser = require('body-parser'),

var app = express();

app.set('port', process.env.PORT || 5000);
app.use(body_parser.json());
app.use(express.static('public'));


app.get('/testDummy', (req, res) => {
    let body = req.query;
    let response = {
        "text": `Great, i got your message happy to see you back`
    };

    res
        .status(200)
        .send('Please close this window to return to the conversation thread.');
    
});

function callSendAPI( response) {
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": 123
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://damp-meadow-85285.herokuapp.com/options",
        "method": "GET",
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
            console.log(body);
        } else {
            console.error("Unable to send message:" + err);
             console.log(body.error);
        }
       
    });
}

callSendAPI({});