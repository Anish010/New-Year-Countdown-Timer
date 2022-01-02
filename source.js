const days = document.getElementById("days").querySelector("h2");
const hours = document.getElementById("hours").querySelector("h2");

const minutes = document.getElementById("minutes").querySelector("h2");
const seconds = document.getElementById("seconds").querySelector("h2");
const clock = document.getElementById("countdown");
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);
const nextDayOfNewYear = new Date(`January 2 ${currentYear + 1} 00:00:00`);
// const newYearTime = new Date(`January 2 ${currentYear} 23:53:00`);
// const nextDayOfNewYear = new Date(`January 2 ${currentYear} 23:54:00`);
let initializeTime = time => time < 10 ? '0' + time : time; 
function countDownTime() {
    const currentTime = new Date();
    
    const TimeLeft = Date.parse(newYearTime) - Date.parse(currentTime);
    const day = Math.floor(TimeLeft / 1000 / 60 / 60 / 24);
    const hour= Math.floor(TimeLeft/1000/60/60)%24;
    const min = Math.floor(TimeLeft/1000/60)%60;
    const sec = Math.floor(TimeLeft / 1000) % 60;
    if (currentTime >= newYearTime && currentTime < nextDayOfNewYear) {
        clock.style.display = "none";
        document.body.style.background = "url('/Images/background_1.jpg')";
        var y = new Date().getFullYear() + 1;
        var t = y.toString();
        document.body.querySelector("h1").textContent = "HAPPY NEW YEAR";
        document.getElementById("welcome_year").textContent ='WELCOME '+t + " !";
        document.querySelectorAll(".headers").forEach(header => header.style.display = "block");
        document.querySelectorAll(".headers").forEach(header => header.style.display = "block");
        document.querySelector("#new_year_cntdwn").style.display = "none";
    }
        days.textContent = initializeTime(day);
        hours.textContent = initializeTime(hour);
        minutes.textContent = initializeTime(min);
        seconds.textContent = initializeTime(sec);

}

setInterval(countDownTime,1000);