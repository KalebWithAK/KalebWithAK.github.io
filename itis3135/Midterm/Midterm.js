var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    $('btn-updateCalorie').addEventListener('click', updateCalorie);
    $('btn-avgCalorie').addEventListener('click', showAverageCalories);
    $('show_max').addEventListener('mouseenter', showMax);
};

function updateCalorie() {
    const calorieAmount = $('text-calorie').value;
    
    // validate calorieAmount
    if(isNaN(calorieAmount) || !calorieAmount) {
        alert('Enter a valid number');
        return;
    }

    // get selected day from radio buttons
    let day = '';
    for (let i in $('chooseDay').children) {
        if ($('chooseDay').children[i].checked) {
            day = $('chooseDay').children[i].value; 
        }
    }

    // validate a day is selected
    if (day === '') {
        alert('Select a day');
        return;
    }

    calories[days.indexOf(day)] = Number(calorieAmount);
    alert('Your updated calorie details are: \n' + calories.join(', '));
}

function showAverageCalories() {
    // find average calories
    const sumCalories = calories.reduce((sum, i) => sum + i);
    const avgCalories = (sumCalories / calories.length).toFixed(2);
    
    // update input
    const text = $('text-avgCalorie');
    text.value = avgCalories;
    text.style.color = 'green';
    text.style.background = 'transparent';
}

function showMax() {
    let max = 0;
    for (let i in calories) {
        if (max < calories[i]) {
            max = calories[i];
        }
    }

    const day = days[calories.indexOf(max)];
    $('showMax').innerHTML = `<p>Your maximum consumed calorie is ${ max } on ${ day }`;
}