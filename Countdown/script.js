const days = document.getElementById("days");
const hrs = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");

setInterval(update, 1000);

let year = new Date().getFullYear();

function update() {

    const birthDay = "30 June " + year;
    const birthDate = new Date(birthDay);
    const dateToday = new Date();

    if(birthDate < dateToday) {
        year++;
        console.log(year);
    }

    const mSeconds = (birthDate - dateToday) / 1000;

    const daysLeft = Math.floor(mSeconds / 3600 / 24);
    const hrsLeft = Math.floor(mSeconds / 3600) % 24;
    const minsLeft = Math.floor(mSeconds / 60) % 60;
    const secsLeft = Math.floor(mSeconds) % 60;

    days.innerHTML = daysLeft;
    hrs.innerHTML = format(hrsLeft);
    mins.innerHTML = format(minsLeft);
    secs.innerHTML = format(secsLeft);

}

function format(time) {
    if (time < 10 && time > -1) {
        return '0' + time.toString();
    } else {
        return time;
    }
    
}

