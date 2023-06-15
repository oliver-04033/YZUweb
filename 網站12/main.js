$(function(){
    $("button").on("click", loadServerData);
});
function loadServerData(){
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html")
    .done(function(data){
        for(let x = 0; x <data.items.length; x++){
            $("#dataTable").append(`<tr><td><a target ='blank'
             href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`);
        }
        console.log("success");
    })
    .fail(function(){console.log("error");})
    .always(function(){
        console.log("always");
    })
}