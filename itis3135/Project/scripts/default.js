$(document).ready(() => {
    $('nav').children().hover(handleHover, handleNoHover);
    console.log($('nav').children())
});

function handleHover() {
     
    //$(this).animate({ color: '#9082b7'});
}

function handleNoHover() {
    $(this).animate({ color: '#bb84c3'});
}