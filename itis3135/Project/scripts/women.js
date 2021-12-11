$(document).ready(() => {
    //$('#container-eBoard').bxSlider();

    $.get('./json/women.json', (data) => {
        const { eBoard } = JSON.parse(data);

        for (let i = 0; i < eBoard.length; i++) {
            displayBio(eBoard[i], '#container-eBoard');
        }
    });
});

function displayBio(member, div) {
    const card = $('<div>').attr('class', 'card');
    card.append(`
        <img src="${ member.image }">
        <h3>${ member.name }</h3>
    `);

    $(div).append(card);
}