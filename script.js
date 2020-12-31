var dateNewYear = "1 Jan 2021";
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
function countdown(){
    var newDate = new Date(dateNewYear);
    var currentDate = new Date();
    var totalSecond = Math.floor((newDate - currentDate)/1000);
    var days = Math.floor((totalSecond / 3600) / 24);
    var hours = Math.floor((totalSecond / 3600) % 24);
    var min = Math.floor((totalSecond / 60) % 24);
    var sec = Math.floor(totalSecond % 60);
    day.innerHTML = days;
    hour.innerHTML = underten(hours);
    minute.innerHTML = underten(min);
    second.innerHTML = underten(sec);
}
function underten(n){
    return n < 10 ? `0${n}`:n;
}
setInterval(countdown,1000);