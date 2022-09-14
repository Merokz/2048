//check if the key pressed is w,a,s,d or arrow keys
//translate the lower code to JQuerry code

$(document).keydown(function (event) {
    if (event.keyCode == 87 || event.keyCode == 38) {
        move("up");
    } else if (event.keyCode == 65 || event.keyCode == 37) {
        move("left");
    } else if (event.keyCode == 83 || event.keyCode == 40) {
        move("down");
    } else if (event.keyCode == 68 || event.keyCode == 39) {
        move("right");
    }
});
document.addEventListener('keydown', function (event) {

});
//for mobile devices, check if the user swiped up, down, left or right
//translate the swipe to JQuerry code
var touchStartX = 0;
var touchStartY = 0;
var touchEndX = 0;
var touchEndY = 0;
var touchStart = false;
var touchEnd = false;

function touchStartHandler(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    touchStart = true;
}

function touchEndHandler(event) {
    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;
    touchEnd = true;
    if (touchStart && touchEnd) {
        if (touchEndX - touchStartX > 50) {
            move("right");
        } else if (touchEndX - touchStartX < -50) {
            move("left");
        } else if (touchEndY - touchStartY > 50) {
            move("down");
        } else if (touchEndY - touchStartY < -50) {
            move("up");
        }
    }
    touchStart = false;
    touchEnd = false;
}
document.addEventListener('touchstart', touchStartHandler, false);
document.addEventListener('touchend', touchEndHandler, false);

//if the user clicked on the "rightArrow" i, add one to the values inside boardSizeX and boardSizeY 

$("#rightArrow").click(function () {
    $("#boardSizeX").val(parseInt($("#boardSizeX").val()) + 1);
    $("#boardSizeY").val(parseInt($("#boardSizeY").val()) + 1);
});

//if the user clicked on the "leftArrow" i, subtract one from the values inside boardSizeX and boardSizeY

$("#leftArrow").click(function () {
    $("#boardSizeX").val(parseInt($("#boardSizeX").val()) - 1);
    $("#boardSizeY").val(parseInt($("#boardSizeY").val()) - 1);
});



