$(document).ready(() => {
    $.ajax({
        type: 'get',
        url: 'https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&tags=vectacorpbuilding&callback=?',
        dataType: 'jsonp'
    });
});

// handle data from flickr request
function jsonFlickrFeed(data) {
    data.items.forEach(item => {
        // create link with lightbox info
        const a = $('<a>').attr('href', item.media.m)
        .attr('data-lightbox', 'new_building')
        .attr('data-title', item.title)
        // put img in link tag
        .append(`<img src=${item.media.m}>`);

        $('#new_building').append(a);
    });
}