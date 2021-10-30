let cards = [];

window.onload = () => {
    cards = [...document.getElementsByClassName('card')];
    cards.map(i => {
        i.addEventListener('mouseenter', cardExpand);
        i.addEventListener('mouseleave', cardShrink);
    });
}

function cardExpand() {
    this.innerHTML = 'Come check out our ' + this.innerHTML.match(/<strong>(\w+\s\w+\s\w+|\w+)<\/strong>/)[0];
}

function cardShrink() {
    this.innerHTML = this.innerHTML.match(/<strong>(\w+\s\w+\s\w+|\w+)<\/strong>/)[0];
}