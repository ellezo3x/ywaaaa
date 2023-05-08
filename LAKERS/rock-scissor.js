const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn');

function clickRockBtn(){
    let result = '';
    let random = Math.round(Math.random());

    if (random === 0) {
        result = 'rock';
    }

    else if (random === 1){
        result = 'paper';
    }

    else if (random === 2){
        result = 'scissor';
    }

    let guess = 'rock';

    if (guess === result){
        alert('The result is ' + result + ' You win!');
    }
    else{
        alert('The result is ' + result + 'You lose!');
    }

    console.log(guess);
}

function clickPaperBtn(){
    let result = '';
    let random = Math.round(Math.random());

    if (random === 0) {
        result = 'rock';
    }

    else if (random === 1){
        result = 'paper';
    }

    else if (random === 2){
        result = 'scissor';
    }

    let guess = 'paper';

    if (guess === result){
        alert('The result is ' + result + ' You win!');
    }
    else{
        alert('The result is ' + result + 'You lose!');
    }

    console.log(guess);
}

function clickScissorBtn(){
    let result = '';
    let random = Math.round(Math.random());

    if (random === 0) {
        result = 'rock';
    }

    else if (random === 1){
        result = 'paper';
    }

    else if (random === 2){
        result = 'scissor';
    }

    let guess = 'scissor';

    if (guess === result){
        alert('The result is ' + result + ' You win!');
    }
    else{
        alert('The result is ' + result + 'You lose!');
    }

    console.log(guess);
}