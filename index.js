var posx = 0;

var posy = 0;

var btn = document.getElementById('btn');

var place = document.getElementById('gamePlace');


function rnd(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function move() {
    posx += rnd(300,20);
    posy += rnd(300,20)
    btn.style.left = posx + "px";
    btn.style.top = posy + "px";

    if ((posx > 420) || (posy > 340)) {
        posx = 0;
        posy = 0;
    }
}




// if ((btn.style.left > place.style.width) || (btn.style.top > place.style.height)) {
    
//     }