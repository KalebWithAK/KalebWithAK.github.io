const images = [];

$(document).ready(function() {
        
        // preload the image for each link
        preloadImages();
        // set up the event handlers for each link
        $('li a').click(handleLink);

            
        // move the focus to the first link
        $('ul').children().first()
        .children().first()
        .children().first()
        .addClass('focus');

}); // end ready

function preloadImage(i) {
        return $('<img>').attr('src', `Activity10_images/h${i}.jpg`);
}

function preloadImages() {
        for (let i = 0; i < 6; i++) {
                images.push(preloadImage(i+1));
        } 
}

function handleLink(e) {
        // cancel the default action of each link
        e.preventDefault();
        $('li a img').removeClass('focus');
        $(this.children).addClass('focus');
        animateCaption(this);  
}

// get the image URL and caption for each image and animate the caption
function animateCaption(link) {
        $('#caption').finish().fadeOut();
        setTimeout(() => $('#caption').text(link.title), 400);
        $('#caption').fadeIn();

        $('p').finish().fadeOut();
        setTimeout(() => {
                $('p').children().remove();
                $('p').append(images[link.title.charAt(link.title.length - 1) - 1]);
        }, 400);
        $('p').fadeIn();

        // gets image URL and caption, never actually used
        return [link.href.match(/Activity10_images\/\S+/), link.title];
}