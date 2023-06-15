$(function(){
    
    $("#myVideo").attr("src", "sample-mp4-file.mp4");
    //console.log("123");
    $("#playBtn").on("click", function(){
        $("#volumedisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max = $("#myVideo")[0].duration;
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("pause");
        }else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
    $("#fullBtn").on("click",function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerbtn").on("click", downVolume);
    $("#higherbtn").on("click", upVolume);
    $("#myVideo").on("timeupdate", updateprogress);
    $("#progressBar").on("change", changeprogress);
});
function downVolume(){
    let myVideo = $("#myVideo")[0];
    if(myVideo.volume == 0){
        myVideo.volume = 0;
    }else if(myVideo.volume < 0.1){
        myVideo.volume = 0;
    }else{
        myVideo.volume = myVideo.volume-0.1;
    }
    $("#volumeDisplay").text(myVideo.volume.toFixed(2));
}
function upVolume(){
    let myVideo = $("#myVideo")[0];
    if(myVideo.volume == 1){
        myVideo.volume = 1;
    }else if(myVideo.volume > 0.9){
        myVideo.volume = 1;
    }else{
        myVideo.volume = myVideo.volume+0.1;
    }
    $("#volumeDisplay").text(myVideo.volume.toFixed(2));
}
function updateprogress(){
    $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
    $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
    $("#progressBar")[0].value = $("#myVideo")[0].currentTime;
}
function changeprogress(){
$("#myVideo")[0].currentTime = $("#progressBar")[0].value;
}
