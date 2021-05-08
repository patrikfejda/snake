function score_add() {
    score++;
    console.log("Score: ", score);
}

function score_zero() {
    score = 0;
    console.log("Score set to ", score);
}

function count_high_score() {
    if (score > hight_score) {
        hight_score = score;
    }
}
