const date = document.querySelector(".js-date"),
    dateTitle = date.querySelector("h2");

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const dayindex = today.getDay();
    
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    //const days_mobile = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    dateTitle.innerText=`${year}.${
        month < 10 ? `0${month}` : month}.${
        date < 10 ? `0${date}` : date} ${days[dayindex]}`;

    /*if(matchMedia("screen and (max-width:645px)")){
        //모바일
        dateTitle.innerHTML=`${year}.${
            month < 10 ? `0${month}` : month}.${
            date < 10 ? `0${date}` : date} <br> ${days_mobile[dayindex]}`;
    }else {
        //데스크탑
        dateTitle.innerText=`${year}.${
            month < 10 ? `0${month}` : month}.${
            date < 10 ? `0${date}` : date} ${days[dayindex]}`;
    }
*/
    
}


function init() {
    getDate();
}

init();
