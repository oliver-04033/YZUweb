$(function(){
    getlocation();
});
function getlocation(){
    if(navigator.geolocation == undefined){
        alert("failed to get location");
        return;
    }
    let setting = {
        enableHighAccuracy:true
    };
    navigator.geolocation.getCurrentPosition(result, error, setting);
};

function result(position){
    let thisCoords = position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
}

function error(err){
    alert(err);
}