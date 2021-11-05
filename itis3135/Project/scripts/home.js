let cards = [];

$(document).ready(() => {
    $('.card').hover(cardExpand, cardShrink);
});

// add some text, increase card height
function cardExpand() {
    $(this).finish();
    
    $(this).animate({ height: '5em' }, 200);
    $(this).children()[0].before('Come check out our')//.fadeOut(200, () => ).fadeIn(200);
    //
}

// remove some text, reduce card height
function cardShrink() {
    $(this).finish();
    const strong = $(this).children()[0];
    $(this).animate({ height: '3em' }, 200)//.fadeOut(200, () => ).fadeIn(200);
    $(this).text('').append(strong);
}