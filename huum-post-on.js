"use strict"
 
let temperature
temperature = 50;
 
let data = 'targetTemperature='+ temperature;
 
const axios = require('axios');
const urlstart = "https://api.huum.eu/action/home/start";
 
axios.post(urlstart,data, 
    {auth:        {username: 'user',  password: 'pass' }   
    })
			 // enter Username and Password from your App

  .then(function (response) {
    console.log(response.data);
  })

  .catch(function (error) {
    console.log(error);
  });
