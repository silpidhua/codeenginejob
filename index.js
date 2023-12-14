const axios = require('axios');

axios.get('https://randomuser.me/api/')
  .then(response => {
    console.log("result");
    console.log(JSON.stringify(response.data.results));
  })
  .catch(error => {
    console.log("error!!");
    console.log(error);
  });