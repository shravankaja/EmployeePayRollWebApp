define([''], function () {
    var method = {}

    let arr = [1, 2, 3]
    method.check = function () {
        return arr;
    }

    method.testNamePattern = function (pattern, nameCheck) {
        if (pattern.test(nameCheck) || nameCheck == "")
            return true;
        else
            return false;
    }
    
    return method;

});









