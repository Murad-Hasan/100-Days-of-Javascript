//local time

let today = new Date();

function getData(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date}-${month}-${year}`;
}

const date = document.querySelector(".date");
date.innerHTML = getData(today);

//Get time
showTime();
function showTime() {
  let today = new Date();
  let time = today.toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
  setTimeout(showTime, 1000);
}
