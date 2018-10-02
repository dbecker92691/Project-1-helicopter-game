let time = 0;

// generate game timer
// make timer keep track of longest running time before
// helicopter colides with obsticle




// make game board


// const obsticals = {

// create randomly generated obsticals
// obsticals will move across the screen from
// right to left

// }

const helicopter = {
    X: 3,
    Y: 4,   
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
        const currentSquare = $('#helicopter');
        currentSquare.removeAttr('id');
        helicopter.y++;
        $(`.square-3-${helicopter.y}`).attr('id', 'helicopter');
}
const moveDown = () => {
        const currentSquare = $('#helicopter');
        currentSquare.removeAttr('id');
        helicopter.y--;
        $(`.square-3-${helicopter.y}`).attr('id', 'helicopter');
}

$('body').keydown((e)=>{
    if(e.which == 38){
        moveUp();
    }else if(e.which == 40){
        moveDown()
    }
})