$(document).ready(() => {
    $.get('./facultyList.json', (data) => {
        displayFaculty(data.facultymembers);
    });
});

function displayFaculty(faculty) {    
    for (let i = 0; i < faculty.length; i++) {
        const { image, full_name, first_name, department, bio } = faculty[i];
        $('main').append(`
            <img src=${ image } alt=${ first_name }>
            <h2>${ full_name }</h2>
            <h3>${ department }</h3>
            <p>${ bio }</p>
        `);
    }
}