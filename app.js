

'use strict';

// Imports dependencies and set up http server
const request = require('request');

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