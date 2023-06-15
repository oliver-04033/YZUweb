$(function(){
    $("button").on("click", loadServerData);
})

function loadServerData(){
    $.getJSON("https://api.chucknorris.io/jokes/random")
    .done(function(data){
        console.log("success");
        $("#showdata").text(data.value);
    })
    .fail(function(data){
        console.log("error");
    })
    .always(function(data){
        
    })
}