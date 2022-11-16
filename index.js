const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const workPrev = document.getElementById("work-prev");
const workCurr = document.getElementById("work-curr");
const playPrev = document.getElementById("play-prev");
const playCurr = document.getElementById("play-curr");
const studyPrev = document.getElementById("study-prev");
const studyCurr = document.getElementById("study-curr");
const exercisePrev = document.getElementById("exercise-prev");
const exerciseCurr = document.getElementById("exercise-curr");
const socialPrev = document.getElementById("social-prev");
const socialCurr = document.getElementById("social-curr");
const carePrev = document.getElementById("care-prev");
const careCurr = document.getElementById("care-curr");

daily.addEventListener("click", dailyStats);
weekly.addEventListener("click", weeklyStats);
monthly.addEventListener("click", monthlyStats);

function dailyStats () {
    workPrev.textContent = "7hrs";
    workCurr.textContent = "Yesterday - 5hrs";
    playPrev.textContent = "1hr";
    playCurr.textContent = "Yesterday - 2hrs";
    studyPrev.textContent = "0hr";
    studyCurr.textContent = "Yesterday - 1hr";
    exercisePrev.textContent = "1hr";
    exerciseCurr.textContent = "Yesterday - 1hr";
    socialPrev.textContent = "1hr";
    socialCurr.textContent = "Yesterday - 3hrs";
    carePrev.textContent = "0hr";
    careCurr.textContent = "Yesterday - 1hr";
}

function weeklyStats () {
    workPrev.textContent = "32hrs";
    workCurr.textContent = "Last Week - 36hrs";
    playPrev.textContent = "10hrs";
    playCurr.textContent = "Last Week - 8hrs";
    studyPrev.textContent = "4hrs";
    studyCurr.textContent = "Last Week - 7hrs";
    exercisePrev.textContent = "4hrs";
    exerciseCurr.textContent = "Last Week - 5hrs";
    socialPrev.textContent = "5hrs";
    socialCurr.textContent = "Last Week - 10hrs";
    carePrev.textContent = "2hrs";
    careCurr.textContent = "Last Week - 2hrs";
}

function monthlyStats () {
    workPrev.textContent = "103hrs";
    workCurr.textContent = "Last Month - 128hrs";
    playPrev.textContent = "23hrs";
    playCurr.textContent = "Last Month - 29hrs";
    studyPrev.textContent = "13hrs";
    studyCurr.textContent = "Last Month - 19hrs";
    exercisePrev.textContent = "11hrs";
    exerciseCurr.textContent = "Last Month - 18hrs";
    socialPrev.textContent = "21hrs";
    socialCurr.textContent = "Last Month - 23hrs";
    carePrev.textContent = "7hrs";
    careCurr.textContent = "Last Month - 11hrs";
}