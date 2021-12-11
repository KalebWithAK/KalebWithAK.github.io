const upcoming = [];
const past = [];

$(document).ready(() => {
    $('main').tabs();

    // request all events
    /*$.get('./json/events.json', (data) => {
        const events = JSON.parse(data);

        sortEvents(events);

        for (let i = 0; i < upcoming.length; i++) {
            displayEvent(past[i], '#upcoming-events');
        }
        if (upcoming.length === 0) {
            $('#upcoming-events').html('<p>No upcoming events</p>');
        }

        for (let i = 0; i < past.length; i++) {
            displayEvent(past[i], '#past-events');
        }
        if (past.length === 0) {
            $('#past-events').html('<p>No past events</p>');
        }        
    });*/
});

// sort events between upcoming and past events
function sortEvents(events) {
    for (let i = 0; i < events.length; i++) {
        if (new Date() < new Date(events[i].date).getTime()) {
            upcoming.push(events[i]);
        }
        else {
            past.push(events[i]);
        }
    } 
}

function displayEvent(event, div) {
    const card = $('<div>').attr('class', 'card')
    .attr('alt', event.name)
    .html(`
            <img src='./images/events/${ event.image }'>
    `)
    .hover(() => {
        // expand card
        card.finish();
        card.html('');
        card.animate({ height: '30em' }, 200);

        card.html(`
            <img src='./images/events/${ event.image }'>
            <h3>${ event.name }</h3>
            <p>${ event.date.toString() } ${ event.time.start} - ${ event.time.end }</p>
            <p>${ event.location.name }</p>
            <p>${ event.location.address }</p>
        `);
    }, () => {
        // shrink card
        card.finish();
        card.html('');
        card.animate({ height: '16em' }, 200);
    
        card.html(`<img src='./images/events/${ event.image }'>`);
    });
    $(div).append(card);
}

// card links to instagram on click