const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const today = new Date();

date.innerHTML = today.getDate();
day.innerHTML = week[today.getDay()];
month.innerHTML = mth[today.getMonth()];
year.innerHTML = today.getFullYear();
