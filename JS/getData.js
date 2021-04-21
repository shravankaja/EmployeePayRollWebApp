/*
require(['../node_modules/axios/dist/axios.js'], function (axios) {

  


   getDataFromServer = function(axios) {
        axios.get('http://localhost:3000/users')
                            .then(resp => {
                        data = resp.data;
data.forEach(e => {
    console.log(`${e.first_name}, ${e.last_name}, 		${e.email}`);
});
})
.catch(error => {
console.log(error);
}); 
    }

  
  })  
  */

axios.get('http://localhost:3000/users')
                         .then(resp => {
                     data = resp.data;
        data.forEach(e => {
 console.log(`${e.first_name}, ${e.last_name}, 		${e.email}`);
});
})
.catch(error => {
console.log(error);
});   