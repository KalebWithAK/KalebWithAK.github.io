const team = [
    { name: 'Karasuno High School\'s Men\'s Volleyball Team', source: 'images/haikyuuTeam-devdiscourse.jpg' },
    { name: 'Daichi Sawamura', source: 'images/daichi-haikyuuFandom.jpg' },
    { name: 'Koshi Sugawara', source: 'images/sugawara-haikyuuFandom.jpg' },
    { name: 'Asahi Azumane', source: 'images/asahi-haikyuuFandom.jpg' },
    { name: 'Yu Nishinoya', source: 'images/nishinoya-haikyuuFandom.jpg' },
    { name: 'Ryunosuke Tanaka', source: 'images/ryunosuke-haikyuuFandom.jpg' },
    { name: 'Chikara Ennoshita', source: 'images/ennoshita-haikyuuFandom.jpg' },
    { name: 'Hisashi Kinoshita', source: 'images/kinoshita-haikyuuFandom.jpg' },
    { name: 'Kazuhito Narita', source: 'images/narita-haikyuuFandom.jpg' },
    { name: 'Tobio Kageyama', source: 'images/kageyama-haikyuuFandom.jpg' },
    { name: 'Shoyo Hinata', source: 'images/hinata-haikyuuFandom.jpg' },
    { name: 'Kei Tsukishima', source: 'images/tsukishima-haikyuuFandom.jpg' },
    { name: 'Tadashi Yamaguchi', source: 'images/yamaguchi-haikyuuFandom.jpg' }
];
const images = [];
let index = 0;
preload();

$(function () {
    $('#previous').click(previousSlide);
    $('#next').click(nextSlide);
    display();
});

function preload() {
    for (let i in team) {
        const image = $('<img>').attr('src', team[i].source).attr('alt', team[i].name);
        images.push(image);
    }
}

function display() {
    $('#display').html('');
    $('#display').append($('<figcaption>').text(team[index].name), images[index]);
}

function previousSlide() {
    if (index === 0) {
        index = images.length - 1;
    }
    else {
        index--;
    }
    display();
}

function nextSlide() {
    if (index === images.length - 1) {
        index = 0;
    }
    else {
        index++;
    }

    display();
}