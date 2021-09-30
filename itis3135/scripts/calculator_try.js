// h3 showing output of numbers, operations, and calculations
const text_output = document.querySelector("#text-output");
let calculation = [];

// add digits to current number
function appendDigit(digit)
{
    const calculation = text_output.innerHTML.split(" ");

    if (calculation[calculation.length - 1].includes(".") && digit === ".")
    {
        return;
    }

    text_output.innerHTML += digit;
}

// get operation
function getOperation(operation)
{
    const calculation = text_output.innerHTML.split(" ");
    
    if (calculation.length === 3)
    {
        getResult();
    }

    if (calculation[2] === "" || calculation[0] === "")
    {
        return;
    }

    // make sure first value is a number
    if (isNaN(calculation[0]))
    {
        clearOutput();
        return;
    }

    text_output.innerHTML += ` ${ operation } `;
}

// get numbers, operation, and result
function getResult()
{
    const calculation = text_output.innerHTML.split(" ");

    // make sure there's a second value
    if (calculation[2] == "")
    {
        return;
    }

    let [a, operator, b] = calculation;


    // make sure second value is a number
    if (isNaN(calculation[calculation.length - 1]))
    {
        clearOutput();
        return;
    }

    a = Number(a);
    b = Number(b);
    
    switch (operator)
    {
        case "/":
            output(a / b);
            break;
        case "*":
            output(a * b);
            break;
        case "-":
            output(a - b);
            break;
        case "+":
            output(a + b);
            break;
    }
}

// clear everything in output
function clearOutput()
{
    text_output.innerHTML = "";
    calculation = [];
}

function output(outputString)
{
    text_output.innerHTML = outputString;
}

clearOutput();
