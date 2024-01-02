let peopleArr = ["Monkey D. Luffy", "Roronoa Zoro", "'God' Usopp", "Brook D. Skeleton", "'Cat Burglar' Nami", "Laboon D. Whale", "Tony Tony Chopper"];
let salariesArr = [3000000, 1111000, 500000, 383000, 366000, 2000, 1000];
document.getElementById("userName").focus();

function addSalary() {
    let userName = document.getElementById("userName").value;
    let userSalary = document.getElementById("userSalary").value;

    if (userName == "" || userSalary == "") {
        alert("One or both of the fields are empty! Try again.");
        document.getElementById("userName").focus();
        return;
    }

    salariesArr.push(userSalary);
    peopleArr.push([userName]);
    userName.value = null;
    userSalary.value = null;
    document.getElementById("userName").focus();
}

function displayResults() {
    // Assume first number in array is highest until changed.
    let highest = salariesArr[0];

    let results = document.querySelector(".results");
    
    // Calculate the average salary and highest number.
    total = 0;
    for (let i = 0; i < salariesArr.length; i++) {
        total = +total + +salariesArr[i];
        if (highest < salariesArr[i]) {
            highest = salariesArr[i];
        }
    }
    let average = total / salariesArr.length;

    // Display the average and highest salary.
    results.innerHTML = `
    <h2>Highest salary</h2>
    <p>${highest}</p>
    <h2>Average salary</h2>
    <p>${average}</p>
    `;
}

function displaySalary() {
    // Holds the basic info that does not change for the most part.
    let tableBody = document.querySelector(".displaySalary");
    
    // Holds the table that can be of varying lengths.
    let table = ``;

    // Input the number of table rows based on the length of the array.
    for (let i = 0; i < peopleArr.length; i++) {
        let currentRow = `
        <tr>
            <td>${peopleArr[i]}</td>
            <td>${salariesArr[i]}</td>
        </tr>
        `;
        table += currentRow;
    }

    // Display the table with the variable number of rows.
    tableBody.innerHTML = `
    <table id="results_table">
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
        ${table}
    </table>
    `;
}