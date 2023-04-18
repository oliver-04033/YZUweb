let topic = [
    "課程介紹",
    "環境安裝",
    "國定假日",
    "lab1",
    "lab2"
];

let startdate = new Date();

function setMonthandday(startmonth, startday){
    startdate.setMonth(startmonth-1, startday);
    startdate.setHours(0);
    startdate.setMinutes(0);
    startdate.setSeconds(0);
}
setMonthandday(2, 14)