let player;
let currentPlay = 0;
function onYouTubeIframeAPIReady(){
    console.log("YT");
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:list[currentPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:time[currentPlay][0],
            end:time[currentPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    $("#playbutton").on("click", function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    console.log(event);
    if(Math.floor(player.getCurrentTime())==time[currentPlay][1]){
        if(currentPlay<list.length-1){
            currentPlay++;
            player.loadVideoById({
                videoId:list[currentPlay],
                startSeconds:time[currentPlay][0],
                endSeconds:time[currentPlay][1],
                suggestedQuality:"large"
            });
        }else{
            currentPlay = 0;
            player.cueVedioById({
                videoId: list[currentPlay],
                startSeconds:time[currentPlay][0],
                endSeconds:time[currentPlay][1],
                suggestedQuality:"large"
            });
            $("h2").text("");
        }
    }
    if(event.data==1){
        $("h2").text(player.getVideoData().title);
    }
}