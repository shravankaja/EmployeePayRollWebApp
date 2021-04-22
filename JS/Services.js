


define([''], function () {

    var methods = {};
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

    methods.postData = function (obj) {
        let res  =   axios.post('http://localhost:3000/users',obj);
        console.log(res.data)
    }

    methods.delete = function(id) {
        let url = `http://localhost:3000/users/${id}/2`
        
        let res =  axios.delete(url);

        console.log(res.status);
    }



    return methods;
});