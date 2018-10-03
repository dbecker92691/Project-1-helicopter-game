let milliseconds = 0;
let seconds = 0; 
let minutes = 0;
let time = null; 
// use this variable to keep track of high score

// make timer keep track of longest running time before
// helicopter colides with obsticle


// obsticals will move across the screen from
// right to left

// }

const helicopter = {
    X: 3,
    Y: 4,
    isAlive: true,
} 

const allObstacles = [];

class obstacles  {
    constructor(){
        this.X = 15;
        this.Y = Math.floor(Math.random() * 7);
        allObstacles.push(this);
    }
   generate(){
    $(`.square-${this.X}-${this.Y}`).addClass('obstacle')

   } 
   moveLeft(){
    if(this.X >= 0) {
        console.log('moving')
        let currentSquare = $(`.square-${this.X}-${this.Y}`)
        currentSquare.removeClass('obstacle');
        this.X--;
        $(`.square-${this.X}-${this.Y}`).addClass('obstacle')
        console.log(this.X);
        console.log(this.Y);
    }
    }
    collision(){
        const collision = $(`.square-${this.X}-${this.Y}`)
        if(collision.hasClass('obstacle') && collision.attr('id', 'helicopter')){
            gameOver();
        }
    }

}


for(let x = 1; x < 16; x++){
    $('.game').append(`<div class='game-column game-column-${x}'></div>`)
    for(let y = 7; y > 0; y--){
        const gameSquare = $('<div/>')
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${x}-${y}`)
        $(`.game-column-${x}`).append(gameSquare)
    }
} 

$('.square-3-4').attr('id', 'helicopter');





const moveUp = () => {
    if(helicopter.Y <= 6){
        const currentSquare = $('#helicopter');
        currentSquare.removeAttr('id');
        helicopter.Y++;
        $(`.square-3-${helicopter.Y}`).attr('id', 'helicopter');
    }
}
const moveDown = () => {
    if(helicopter.Y >= 2) {
        const currentSquare = $('#helicopter');
        currentSquare.removeAttr('id');
        helicopter.Y--;
        $(`.square-3-${helicopter.Y}`).attr('id', 'helicopter');
    }

}

$('body').keydown((e)=>{
    if(e.which == 38){
        moveUp();
    }else if(e.which == 40){
        moveDown()
    }
})

const gameTimer = () => {
    setInterval(()=>{
        seconds++;
        if(seconds % 2 === 0){
            let newObstacle = new obstacles();
        }
        moveObsticles();
        if(seconds % 60 === 0){
            minutes++;
        }
        $('.timer').text(`Timer:  ${minutes}:${seconds}`);
    },1000);
    
}

$('.startGame').on('click', () => {
gameTimer();
   
})

const moveObsticles = () => {
    for(let i = 0; i < allObstacles.length; i++){
        allObstacles[i].moveLeft();
    }
   }


const gameOver= () => {
        helicopter.isAlive === false;
        $('.highscore').append('')
        clearInterval(gameTimer);
        $('.game').append("<h1 class='gameOver'>Game Over</h1>");
        // switch START button to Play Again button
        // 
}