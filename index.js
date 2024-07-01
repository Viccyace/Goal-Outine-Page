let utcTimeElement = document.getElementById("utc-time");
let currentDayElement = document.getElementById("current-day");

function updateTimeAndDay() {
  let now = new Date();
  utcTimeElement.textContent = now.toUTCString().slice(17, 25);
  currentDayElement.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
