

var buttonColors = ["green", "red", "yellow", "blue"]
var userClickedPattern = []
var gamePattern = [];
var level = 0;
var flag = true;

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);
    var randomNo = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNo];
    gamePattern.push(randomChosenColor);
    animate(randomChosenColor);


}
$(document).keydown(function () {
    if (flag) {
        nextSequence();
        flag = false;
    }


})



$(".btn").click(function (event) {
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animate(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

})
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
        }


    }
    else {
        console.log("wrong");
        gamePattern = [];
        userClickedPattern = [];
        flag = true;
        $("h1").text("game over press any key to restart");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100)
        level = 0;



    }

}









function animate(event) {


    $("#" + event).addClass("pressed");
    setTimeout(function () {
        $("#" + event).removeClass("pressed")
    }, 100)

    var audio = new Audio("./sounds/" + event + ".mp3");
    audio.play();
}

