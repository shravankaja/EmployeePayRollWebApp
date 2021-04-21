window.addEventListener('input',event => { 
    const input = document.querySelector('#lastname')
    input.addEventListener('input',function () {
        let result = testNamePattern(FIRSTNAMEPATTERN,input.value)
        if(result == true ) document.getElementById("namevalidate").innerHTML = ""
        else if( result == false ) document.getElementById("namevalidate").innerHTML = "Enter correct name"
     
    });
      
    document.getElementById('textarea').onkeyup = function () {
        if(this.value.length < 100 ) document.getElementById('textareavalidate').innerHTML = ""
        else document.getElementById('textareavalidate').innerHTML = "Maximum character reached."
        };

 })

