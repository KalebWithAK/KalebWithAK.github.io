$(document).ready(() => {

    const icon = $('#instaIcon').detach();
    const ig = $('#ig').detach();

    $('#instagram').hover(() => {
        $('#instagram').finish().animate({ height: '16em' });

        // add icon
        $('#instagram').append(icon).append(ig);
        icon.finish().fadeIn();

    }, () => {
        icon.finish().fadeOut(600).detach();
        ig.detach();
        $('#instagram').finish().animate({ height: '3em' });
    });

    const ninerengageIcon = $('#ninerengageIcon').detach();
    $('#ninerengage').hover(() => {
        $('#ninerengage').animate({ height: '7em' });
        $('#ninerengage').append(ninerengageIcon);

    }, () => {
        ninerengageIcon.detach();
        $('#ninerengage').animate({ height: '3em' });
        ninerengageIcon.detach();
    });

    const email = $('#emailAddress').detach();
    $('#email').hover(() => {
        $('#email').animate({ height: '5em', width: '16em' });
        $('#email').append(email);
    }, () => {
        $('#email').animate({ height: '3em', width: '10em'});
        email.detach();
    })
});
// expand instagram card displays instagram icon and text
// shrink instagram card just displays text