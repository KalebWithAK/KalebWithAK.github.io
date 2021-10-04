let days = []; //['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
let temperatures = []; //[66, 85, 72, 85, 74, 69, 72, 99];

function valid_day(day)
{
    if (day == '')
    {
        alert('Error: Day must not be empty');
        return false;
    }

    return true;
}

function valid_temperature(temperature)
{
    if (!parseInt(temperature))
    {
        alert('Error: Temperature must be an integer');
        return false;
    }

    return true;
}

function add_temperature()
{
    const new_day = document.getElementById('select_day').value;
    const new_temperature = document.getElementById('text_temperature').value;

    if (valid_day(new_day) && valid_temperature(new_temperature))
    {
        days.push(new_day);
        temperatures.push(parseInt(new_temperature));
    }
}

function display_results()
{
    const div_results = document.getElementById('results');

    if (days.length > 0 && temperatures.length > 0)
    {
        div_results.innerHTML = `
            <p>Average Temperature: ${ average(temperatures) }</p>
            <p>Highest Temperature: ${ highest(temperatures) }</p>
            <p>Lowest Temperature: ${ lowest(temperatures) }</p>
        `;
            //<p>Median Temperature: ${ median(temperatures) }</p>
        
    }
}

function average(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return (sum / array.length).toFixed(2);
}

function highest(array)
{
    let highest = -999999999;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > highest)
        {
            highest = array[i];
        }
    }

    return highest;
}

function lowest(array)
{
    let lowest = 9999999999;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] < lowest)
        {
            lowest = array[i];
        }

        return lowest;
    }
}

function median(array)
{
    array = array.sort();
    if (array.length % 2 === 0)
    {
        // return average of middle two elements of array
        return average([array[array.length / 2 - 1], array[array.length / 2]]);
    }

    return array[array.length / 2 - 0.5];
}

function display_temperatures()
{
    const table = document.getElementById('temperature_table');

    if (days.length > 0 && temperatures.length > 0)
    {
        table.innerHTML = `
            <tr>
                <th>Day</th>
                <th>Temperature</th>
            </tr>
        `;

        for (let i = 0; i < days.length; i++)
        {
            table.innerHTML += `
                <tr>
                    <td>${ days[i] }</td>
                    <td class="rightText">${ temperatures[i] }</td>
                </tr>
            `;
        }
    }
}