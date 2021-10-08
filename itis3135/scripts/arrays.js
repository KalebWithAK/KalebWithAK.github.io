let employees = [];
let salaries = [];

let salariesShown = false;
let resultsShown = false;

document.getElementById("table_heading").innerHTML = "";

function addSalary()
{
    const newEmployee = document.getElementById("select_employee").value;
    const newSalary = document.getElementById("text_salary").value;

    // validate employee
    if (newEmployee.trim() === "")
    {
        alert("Invalid employee selection: an employee must be selected");
        return;
    }

    // validate salary
    if (isNaN(newSalary) || newSalary === "")
    {
        alert("Invalid salary: salary must be a number");
        return;
    }

    // if new employee exists, overwrite current salary with new salary
    let found = false;
    for (let i = 0; i < employees.length; i++)
    {
        if (employees[i] === newEmployee)
        {
            found = true;
            console.log(employees[i]);
            salaries[i] = newSalary;
        }
    }

    // if new employee doesn't exist, push employee and salary to respective arrays
    if (!found)
    {
        employees.push(newEmployee);
        salaries.push(newSalary);
    }

    displayResults();
    displaySalary();

    // employee selection returns to defaults
    document.getElementById("select_employee").value = "";

    // clear text_salary
    document.getElementById("text_salary").value = "";
}

function toggleResults()
{
    resultsShown = !resultsShown;

    displayResults();
}

function displayResults()
{
    const div_results = document.getElementById("results")

    if (salaries.length > 0)
    {
        if (resultsShown)
        {
            //document.getElementById("results").setAttribute("class", "border hidden centerText");
            div_results.innerHTML = `
                <h2>Results</h2>
                <p>Average Salary: ${ average(salaries) }</p>
                <p>Highest Salary: ${ highest(salaries) }</p>
            `;
        }
        else 
        {
            div_results.innerHTML = "";
        }
    }
}

function average(array)
{
    array = array.map(salary => Number(salary));

    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return (sum / array.length).toFixed(2);
}

function highest(array)
{
    const sortedArray = [...array];
    sortedArray.sort();

    return sortedArray[sortedArray.length - 1];
}

function lowest(array)
{
    const sortedArray = [...array];
    sortedArray.sort();

    return sortedArray[0];
}

function median(array)
{
    const sortedArray = [...array];
    sortedArray.sort();
    if (sortedArray.length % 2 === 0)
    {
        // return average of middle two elements of array
        return average([sortedArray[sortedArray.length / 2 - 1], sortedArray[sortedArray.length / 2]]);
    }

    return sortedArray[sortedArray.length / 2 - 0.5];
}

function toggleSalary()
{
    salariesShown = !salariesShown;
    
    displaySalary();
}

function displaySalary()
{
    //:35
    //debug();
    const h2_salaries = document.getElementById("table_heading")
    const div_salaries = document.getElementById("salaries_table");

    if (employees.length > 0 && salaries.length > 0)
    {
        if (salariesShown)
        {
            //document.getElementById("table_div").setAttribute("class", "border hidden");
            h2_salaries.innerHTML = "Salaries";
            div_salaries.innerHTML = `
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            for (let i = 0; i < employees.length; i++)
            {
                div_salaries.innerHTML += `
                    <tr>
                        <td>${  employees[i] }</td>
                        <td class="rightText">${ salaries[i] }</td>
                    </tr>
                `;
            }

            div_salaries.innerHTML += `
                    </tbody>
            `;
        }
        else
        {
            h2_salaries.innerHTML = "";
            div_salaries.innerHTML = "";
        }
    }
}

function debug()
{
    console.log(employees);
    console.log(salaries);
}