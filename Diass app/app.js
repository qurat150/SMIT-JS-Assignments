var score1 = 0;
var score2 = 0
function updateDias(id) {
    var randomValue = Math.ceil(Math.random() * 6)
    document.getElementById(id).innerHTML = randomValue;
    function player1Value() {
        if (id == "showDiasValue-1") {
            score1 = score1 + randomValue
            console.log(score1);
            if (score1 >= "50") {
                document.getElementById("playerWon").innerHTML = `Player 1 Won`;
            }
        }
        document.getElementById("player-1-Score").innerHTML = `Your score is : ${score1}`;
    }
    player1Value()
    function player2Value() {
        if (id == "showDiasValue-2") {
            score2 = score2 + randomValue
            console.log(score2);
            if (score2 >= "50") {
                document.getElementById("playerWon").innerHTML = `Player 2 Won`;
            }
        }
        document.getElementById("player-2-Score").innerHTML = `Your score is : ${score2}`;
    }
    player2Value()
}