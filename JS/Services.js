

define([''], function () {

    var methods = {}
    var users = [];
    var r;

    let dataToBeSent;
    methods.getData = function () {

        return new Promise((resolve, reject) => {

            axios.get('http://localhost:3000/users')
                .then(resp => {
                    r = resp;
                    resolve(resp.data)
                    return Array.from(resp.data)

                })
                .catch(error => {
                    console.log(error);
                });

        });
    }
    return methods;
});