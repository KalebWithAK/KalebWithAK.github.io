function main() 
{
    const companyName = "Kingly Dingo";
    let userName = askUserName();
    let userFeeling = askUserFeeling();

    document.getElementById("dateTime").innerText = `Today is ${ Date.now() }`;
    document.getElementById("welcomeUser").innerText = `Hello ${ userName }, ${ companyName } welcomes you.`;
    document.getElementById("userFeeling").innerText = `We are glad you are doing ${ userFeeling } today!`;

    //document.getElementById("btn_multiply").addEventListener("click", multiplication);
}

function askUserName() 
{
    return prompt("What is your name?");
}

function askUserFeeling() 
{
    return prompt("How are you doing?");
}

// multiply values from inputs and display the result
function multiplication() 
{
    // get values from text inputs
    const a = Number(document.getElementById("input_multiplicationA").value);
    const b = Number(document.getElementById("input_multiplicationB").value);

    // multiply and display result
    document.getElementById("text_multiplicationResult").innerHTML = `${ a * b }`;
}

// find square root of input and display the result
function squareRoot() 
{
    const a = Number(document.getElementById("input_squareRoot").value);

    document.getElementById("text_squareRootResult").innerHTML = Math.sqrt(a);
}

// increment current count and display result
function increment()
{
    // get current count
    const counter = document.getElementById("text_counterResult");
    const count = parseInt(counter.textContent);

    // increment current count and display result
    counter.innerHTML = count + 1;    
}

// decrement current count and display result
function decrement()
{
    // get current count
    const counter = document.getElementById("text_counterResult")
    const count = parseInt(counter.textContent);

    // decrement current count and display result
    counter.innerHTML = count - 1;
}

// display a randomly selected restaurant
function whereToEat()
{
    const restaurants = 
    [
        "Chik-fil-a", 
        "Chipotle", 
        "McDonalds", 
        "Wendy's", 
        "Subway", 
        "Panda Express", 
        "Bojangles", 
        "Pizza Hut",
        "Showmars"
    ];

    // randomly select restaurant from array
    const index = Math.floor(Math.random() * (restaurants.length - 1));

    // display result
    document.getElementById("text_eatResult").innerHTML = restaurants[index];
}

// calculate net pay from gross pay and tax rate and display result
function netPay() {
    // get gross pay
    const grossPay = Number(document.getElementById("input_grossPay").value);
    // get tax rate
    let taxRate = Number(document.getElementById("input_taxRate").value); 
    // if tax rate > 1, user is using % and code needs to adjust (for example 12% as opposed to .12)
    if (taxRate > 1) {
        taxRate /= 100;
    }

    // calculate net pay and calculate result
    document.getElementById("text_netPayResult").innerHTML = grossPay - taxRate * grossPay;
}

main();