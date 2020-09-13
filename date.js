const date = document.querySelector(".js-date"),
    dateTitle = date.querySelector("h2");

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const dayindex = today.getDay();
    
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    dateTitle.innerText=`${year}.${
        month < 10 ? `0${month}` : month}.${
        date < 10 ? `0${date}` : date} ${days[dayindex]}`;

}


function init() {
    getDate();
}

init();
