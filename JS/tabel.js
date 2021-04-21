
window.addEventListener('DOMContentLoaded', event => {
    defineTabel();
})

const getData = function () {
    return new Promise((resolve, reject) => {
        requirejs(['../JS/Services.js', '../JS/Utility.js'], function (data1, d) {
            let result = data1.getData().then((data) => {
                resolve(data)
            });
        })

    })
}


const createTabelHeading = () => {
    tabelHtml = `
    <table class="table">
        <thead class="thead-light" id = "th">
          <tr>
            <th scope="col"></th>
            <th scope = "col">Name</th>
            <th scope= "col">Gender</th>
            <th scope = "col">Department</th>
            <th scope = "col">Salary</th>
            <th scope = "col">Start Date</th>
            <th scope = "col">Actions</th>
          </tr>
        </thead>
     `
    return tabelHtml;
}



const defineTabel = () => {
    let rowArray = [];
    let tabelHeading = createTabelHeading();

    getData().then((data) => {
        return new Promise((resolve, reject) => {
            data.forEach(element => {
                let num = Math.floor(Math.random() * 5) + 1
                let tabelRows = `
                <tr class = "td">
                     <td><img src="../assets/profile-images/Ellipse -${num}.png"></td>
                     <td>${element.name}</td>
                     <td>${element.gender}</td>
                     <td>
                     <div class = "labelcontainer">
                     <div class = "labeldepart">${element.depart}</div>
                      </div>
                  </td>
                  <td>${element.salary}</td>
                     <td>${element.date1}</td>e
                     <td><a href="www.google.com"><img src = "../assets/icons/delete-black-18dp.svg"></a><a href="www.google.com"><img src ="../assets/icons/create-black-18dp.svg"></a></td>
                  </tr>
                `
                rowArray.push(tabelRows)
                resolve(rowArray)
            })
        }).then((array) => {
            return new Promise((resolve, reject) => {
                let concatenateAllRows;
                array.forEach(e => {
                    concatenateAllRows += e;
                })
                resolve(concatenateAllRows)

            })
        }).then(concatenatedRows => {

            let tabelHeading = createTabelHeading();

            let finalTabel = ` ${tabelHeading}
                <tbody>
                ${concatenatedRows}
                </tbody>
                </table>
                </div>
                `
            console.log(finalTabel)

            document.getElementById("tabeldisplay").innerHTML = finalTabel
        })
    })
}














