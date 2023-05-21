
class Game {

    constructor() {

        this.newGame = document.querySelector('button');
        this.grid = document.querySelector('.grid');
        this.cards = [];
        this.currentCards = [];
        this.winCards = [];
        this.makeCards();
        this.cards.sort(() => 0.5 - Math.random());
        this.makeGrid();
        this.flipCard();
        this.newGame.addEventListener('click', () => location.reload());
    }

    makeCards() {

        // Make all 12 cards
        for (let i = 0; i < Card.namesOfCards.length; i++) {

            let imgName = Card.namesOfCards[i];
            let imgSrc = `/images/${Card.namesOfCards[i]}.png`;
            let card = new Card(imgName, imgSrc);
            this.cards.push(card);
        }
    }

    flipCard() {

        this.cards.forEach(card => {
            card.el.addEventListener('click', () => {
                card.el.src = `/images/${card.imgName}.png`

                //If user clicks multiple tmes on the same card
                // do not add them to array list
                if (!this.currentCards.includes(card)) {

                    this.currentCards.push(card);
                }

                if (this.currentCards.length == 2) {
                    setTimeout(this.checkMatch, 500);
                }

            })
        })
    }

    checkMatch = () => {

        if (this.currentCards[0].imgName == this.currentCards[1].imgName) {
            //Hide guessed cards
            let card1 = this.currentCards[0].el.classList.add('hide')
            let card2 = this.currentCards[1].el.classList.add('hide')
            this.winCards.push(card1, card2)

            // If user guessed all cards 
            if (this.winCards.length == 12) {
                let header = document.querySelector('h2');
                this.grid.innerHTML = `<img src="/images/smiley.png" width="500px" height="400px"/>`
                this.grid.style.backgroundColor = "white";
                header.textContent = "Congratulations!!!";
            }

        } else {

            this.currentCards[0].el.src = '/images/back.png';
            this.currentCards[1].el.src = '/images/back.png';
        }
        this.currentCards = [];
    }

    // Make grid of cards with all of back covers
    makeGrid() {

        for (let card of this.cards) {
            this.grid.append(card.el);
        }
    }

}
new Game();



