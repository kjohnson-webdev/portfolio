let eventTarget = document.getElementById("winner");
let gameFeedback = document.getElementById('game-feedback');

eventTarget.addEventListener('click', function(){
    eventTarget.style.border = '3px solid green';
    gameFeedback.innerHTML = 'You Found It!';
});
