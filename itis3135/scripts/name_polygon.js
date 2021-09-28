function main()
{
    let message = "Kingly Dingo would like your number";
    let number;

    do
    {
        number = prompt(message);
        number = validateEntry(number);
        if (number === -1)
        {
            message = "Error: Your entry was not a number. Please enter a number";
        }
        else if (number === -2)
        {
            message = "Error Your entry was outside of the range. Please enter a number between 1 and 10";
        }
    } while(number < 0);

    alert(getShape(number));
}

function getShape(number)
{
    const polygonPrefixes = ["hena", "di", "tri", "tetra", "penta", "hexa", "hepta", "octa", "ennea", "deca"];

    return `${ polygonPrefixes[number - 1] }gon`;
}

function validateEntry(entry)
{
    if (isNaN(entry)) {
        // error entry is not a number
        return -1;
    }

    if (Math.abs(Math.floor(entry)) === 0 || Math.abs(Math.floor(entry)) > 10) {
        // error entry is outside of range (1 through 10)
        return -2;
    }

    return Math.abs(Math.floor(entry));
}

main();