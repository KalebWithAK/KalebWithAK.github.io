const images = [
    { speaker: 'Amy Chua', src: 'images/chua_220.jpg', img: $('<img>') },
    { speaker: 'Scott Sampson', src: 'images/sampson_dinosaur.jpg', img: $('<img>') },
    { speaker: 'Andrew Ross Sorkin', src: 'images/sorkin_desk260.jpg', img: $('<img>') },
    { speaker: 'Jeffrey Toobin', src: 'images/toobin_court.jpg', img: $('<img>') }
];  
$(document).ready(function() {
    loadImages();
    
    $('li a').click(loadSpeaker);
}); // end ready

function loadImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].img.attr('src', images[i].src);
    }
}

function findImage(speaker) {
    return images.filter(i => i.speaker === speaker)[0].img;
}

function loadSpeaker() {
    //$(this).preventDefault();

    const url = './json_files/' + $(this).attr('title') + '.json';
    //console.log(url);
    $.ajax({
        type: 'get',
        url,
        beforeSend: () => {
            console.log('loading...');
        },
        timeout: 10000,
        error: (status, message) => {
            alert('Error: ' + status + ' - ' + message);
        },
        dataType: 'json',
        success: (data) => {
            const { month, title, speaker, text } = data.speakers[0];
            const image = findImage(speaker);

            $('main').html('');
            $('main').append(`
                <h1>${ title }</h1>
                <h2>${ month }</h2>
                <h3>${ speaker }</h3>
            `);
            $('main').append(image);
            $('main').append(`<p>${ text }</p>`);
        }
    })
}