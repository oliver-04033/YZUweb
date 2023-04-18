/*$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topiccount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    for(let x = 0; x < topiccount; x++){
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${(new Date(startdate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
        );
    }
});*/
const dateInput = document.getElementById("myDate");
dateInput.addEventListener("change", (event) => {
    const selectedDate = new Date(event.target.value);
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    setMonthandday(month, day);
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topiccount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    let x = 0;
    for(x = 0; x < topiccount; x++){
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${(new Date(startdate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
        );
    }
    button = document.getElementById("button");
    button.addEventListener("click", (event) => {
        inputdoing = document.getElementById("activity");
        const text = inputdoing.value;
        console.log("輸入的文字是：" + text);
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${(new Date(startdate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()}</td>`+
            `<td>${text}</td>`+
            "</tr>"
        );
        x++;
    });
});