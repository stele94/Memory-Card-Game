class Card {

    static namesOfCards = ['bombons', 'cake', 'chocolate', 'ice-cream', 'pancake', 'pizza', 'bombons', 'cake', 'chocolate', 'ice-cream', 'pancake', 'pizza'];

    constructor(imgName, imgSrc) {

        this.imgName = imgName;
        this.imgSrc = imgSrc;
        this.el = this.makeEl();
    }

    makeEl() {

        let el = document.createElement('img');
        el.setAttribute('src', '/images/back.png');
        return el;
    }

}