let city = [
    { name : "", lat : "", lon : ""},
    { name : "台北", lat : 25.0856513, lon : 121.421409},
    { name : "台中", lat : 24.1852333, lon : 120.4946381},
    { name : "高雄", lat : 22.7000444, lon : 120.0508691},
    { name : "元智", lat : 24.9703173, lon : 121.2608673},
];

$(function(){
    for(let x = 0; x < city.length; x++){
        $("#cityselect").append(
            `<option value = '${x}'>${city[x].name}</option>`
        );
    }
    $("#cityselect").on("change", loadserverdata);
})
function loadserverdata(){
    console.log("123");
    $("#result").empty();
    if(this.value == 0)return;
    let weatherAPI="https://api.openweathermap.org/data/2.5/weather?";
    
    $.getJSON(weatherAPI,{
        lat:city[this.value].lat,
        lon:city[this.value].lon,
        appid:weatherkey,
        units:"metric",
        lang:"zh-tw"
    })
    .done(function(data){
        console.log(data);
        $("#result").append(
            `<p>氣溫:${data.main.temp_min}~${data.main.temp_max}</p>`
        );
        $("#result").append(
            `<p><img src = 'https://openwheatermap.org/img/wn${data.weather[0].icon}@2x.png>'${data.weather[0].description}</p>`
        );
    })
    .fail(function(){console.log("error")})
    .always(function(){console.log("always")})
}