let seconds = 0; 
let minutes = 0;
$('.playagain').hide();
// make timer keep track of longest running time before


const helicopter = {
    X: 3,
    Y: 4,


} 

const allObstacles = [];

class Obstacle  {
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
        let currentSquare = $(`.square-${this.X}-${this.Y}`)
        currentSquare.removeClass('obstacle');
        this.X--;
        $(`.square-${this.X}-${this.Y}`).addClass('obstacle')
    }
    }
    collision(){
        let currentSquare = $(`.square-${this.X}-${this.Y}`)
        if(currentSquare.hasClass('obstacle') && currentSquare.hasClass('helicopter')){
            helicopter.isAlive === false;
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

$('.square-3-4').addClass('helicopter');
$('.helicopter').hide();




const moveUp = () => {
    if(helicopter.Y <= 6){
        const currentSquare = $('.helicopter');
        currentSquare.removeClass('helicopter');
        helicopter.Y++;
        $(`.square-3-${helicopter.Y}`).addClass('helicopter');
    }
}
const moveDown = () => {
    if(helicopter.Y >= 2) {
        const currentSquare = $('.helicopter');
        currentSquare.removeClass('helicopter');
        helicopter.Y--;
        $(`.square-3-${helicopter.Y}`).addClass('helicopter');
    }

}

$('body').keydown((e)=> {
    if(e.which == 38){
        moveUp();
    }else if(e.which == 40){
        moveDown()
    }
})

const gameTimer = () => {
    gameTime = setInterval(()=>{
        seconds++;
        if(seconds % 2 === 0){
            let newObstacle = new Obstacle();
        }
        moveObsticles();
        detectCollision();
        if(seconds % 60 === 0){
            minutes++;
        }
        $('.timer').text(`Timer:  ${minutes}:${seconds}`);
    },1000);
    
}

$('.startGame').on('click', () => {
$('.startGame').hide();
$('.helicopter').show();
gameTimer();
})


const moveObsticles = () => {
    for(let i = 0; i < allObstacles.length; i++){
        allObstacles[i].moveLeft();
    }
 }


 const detectCollision = () => {
     for(let i = 0; i < allObstacles.length; i++){
         allObstacles[i].collision();
     }
 }  



const gameOver = () => {
        $('.highscore').append(gameTime)
        clearInterval(gameTime);
        $('.playagain').show();
        $(`.square`).removeClass('obstacle');
        $(`.square`).removeClass('helicopter');
        $('.game').append("<h1 class='gameOver'>Game Over</h1>");
 }


$('.playagain').on('click', () => {
    location.reload(true);
})

