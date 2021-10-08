let days = []; //['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
let temperatures = []; //[66, 85, 72, 85, 74, 69, 72, 99];
let results_shown = false;
let temperatures_shown = false;

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

    if (results_shown)
    {
        display_results();
    }

    if (temperatures_shown)
    {
        display_temperatures();
    }
}

function display_temperatures()
{
    temperatures_shown = true;
    const table = document.getElementById('temperature_table');

    if (days.length > 0 && temperatures.length > 0)
    {
        if (temperatures_shown)
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
        else
        {
            table.innerHTML = '';
        }
    }
}

function display_results()
{
    results_shown = true;
    const div_results = document.getElementById('results');

    if (days.length > 0 && temperatures.length > 0 && results_shown)
    {
        div_results.innerHTML = `
            <p>Average Temperature: ${ average(temperatures) }</p>
            <p>Highest Temperature: ${ highest(temperatures) }</p>
            <p>Lowest Temperature: ${ lowest(temperatures) }</p>
        `;
            //<p>Median Temperature: ${ median(temperatures) }</p>
        
    }
    else if (!results_shown)
    {
        div_results.innerHTML = '';
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
    array = array.sort();
    return array[array.length - 1];
}

function lowest(array)
{
    array = array.sort();
    return array[0];
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
