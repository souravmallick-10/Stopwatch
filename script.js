var timer = document.getElementById('timer');
var start_btn = document.getElementById('start');
var stop_btn = document.getElementById('stop');
var reset_btn = document.getElementById('reset');

var second = 0;
var interval = 0;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

function stopwatch(){

    second++;

    var hrs = Math.floor(second / 3600);
    var mins = Math.floor((second % 3600) / 60)
    var secs = Math.floor((second % 3600) % 60);

    if(hrs < 10){
        hrs = "0" + hrs;
    }

    if(mins < 10){
        mins = "0" + mins;
    }

    if(secs < 10){
        secs = "0" + secs;
    }

    timer.innerText = hrs + " : " + mins + " : " + secs;
}


function start(){
    interval = setInterval(stopwatch, 1000);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    stop();
    second = 0; 
    timer.innerText = "00 : 00 : 00";
}