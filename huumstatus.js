"use strict"
 
const axios = require('axios');
 
const url = 'https://api.huum.eu/action/home/status';

 
function getHuum () { 
	axios.get(url, 
		{ auth: {
            username: 'user',
            password: 'password' 
			 // enter Username and Password from your App
			}
		})
		.then (function(response) {
			   console.log(response);
			   // console.log(response.data.statusCode);
			   // console.log(response.data.config);
			   // console.log(response.data.light);
			   // console.log(response.data.paymentEndDate);
			   // console.log(response.data.temperature);
			 
 
		})
	 
		.catch(function(error) {
		console.log('Error '+error);
		
	});
};

     getHuum();
