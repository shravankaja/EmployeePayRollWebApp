window.addEventListener('DOMContentLoaded', event => {

    const input = document.querySelector('#lastname')
    input.addEventListener('input', function () {

        requirejs(['../JS/Utility.js'], function (utility) {
            let FIRSTNAMEPATTERN = RegExp('^[A-Z][a-zA-Z]{2,}$');
            let result = utility.testNamePattern(FIRSTNAMEPATTERN, input.value)
            if (result == true) document.getElementById("namevalidate").innerHTML = ""
            else if (result == false) document.getElementById("namevalidate").innerHTML = "Enter correct name"
        })
    })

    document.getElementById('textarea').onkeyup = function () {
        if (this.value.length < 100) document.getElementById('textareavalidate').innerHTML = ""
        else document.getElementById('textareavalidate').innerHTML = "Maximum character reached."
    };

    const myForm = document.getElementById("fo")
    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let infoArray = [];
      

        let getName = () => {
            return new Promise((resolve, reject) => {
                let name1 = document.getElementById('lastname')
                infoArray.push(name1.value)
                requirejs(['../JS/Utility.js'], function (utility) {
                    let FIRSTNAMEPATTERN = RegExp('^[A-Z][a-zA-Z]{2,}$');
                    let result = utility.testNamePattern(FIRSTNAMEPATTERN, input.value)
                    if (result == true) resolve(infoArray)
                    else if (result == false) alert("enter correct name ")
                   
                })
              }).then(arr => {
                return new Promise((resolve, reject) => {
                    let d = document.getElementsByName('image')
                    var radiovalue;
                    for (var i = 0; i < d.length; i++) {
                        if (d[i].checked) {
                            radiovalue = d[i].value;
                        }
                    }
                    arr.push(radiovalue)
                    resolve(arr)
                })
            }).then(arr => {
                return new Promise((resolve, reject) => {
                    let d = document.getElementsByName('radiogender')
                    var radiovalue;
                    for (var i = 0; i < d.length; i++) {
                        if (d[i].checked) {
                            radiovalue = d[i].value;
                        }
                    }
                    arr.push(radiovalue)
                    resolve(arr)
                })

            }).then(arr => {
                return new Promise((resolve, reject) => {
                    let departmentArray = [];
                    let d = document.getElementsByName('department')
                    var radiovalue;
                    for (var i = 0; i < d.length; i++) {
                        if (d[i].checked) {
                            radiovalue = d[i].value;
                            departmentArray.push(radiovalue)
                        }
                    }
                    arr.push(departmentArray)

                    resolve(arr)
                })
            }).then(arr => {
                return new Promise((resolve, reject) => {
                    let salary = document.getElementById('salaryrange')
                    arr.push(salary.value)
                    resolve(arr)
                })

            }).then(arr => {
                return new Promise((resolve, reject) => {
                    var e = document.getElementById("day");
                    var day = e.options[e.selectedIndex].value;

                    var e1 = document.getElementById("month");
                    var month = e1.options[e1.selectedIndex].value;

                    var e2 = document.getElementById("year");
                    var year = e2.options[e2.selectedIndex].value;

                    let date = `${day}-${month}-${year}`
                    arr.push(date)
                    resolve(arr)
                    let textArea = document.getElementById("textarea")
                    console.log(textArea.value)
                    if (textArea.value) {
                        arr.push(textArea.value)
                    }
                    else {
                        let t = "null"
                        arr.push(t)
                    }

                })
            }).then(arr => {

                var threedigitsrandom = Math.floor(100 + Math.random() * 900);

                arr.push(threedigitsrandom)
                console.log(arr)

                let obj = {

                    id: arr[7],
                    name: arr[0],
                    image: arr[1],
                    gender: arr[2],
                    depart: arr[3],
                    salary: arr[4],
                    date: arr[5],
                    text: arr[6]
                }

                requirejs(['../JS/Services.js'], function (method) {
                    method.postData(obj)
                    alert("sucessfully added");
                })
            }).catch(err => { console.log( err)})
        }
        getName();
        

    })
})




