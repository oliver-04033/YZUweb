// window.onload = function(){
//     // alert("hi")
// };
var pre = -1;
let imgurl = [
    "https://attach.setn.com/newsimages/2019/01/30/1762262-XXL.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/383547/b8c3b71ad6d3c050.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png"
];
$(function(){
    $("input").on("click", function(){
        // alert("hi");
        var num = $("li").length;
        var ran = Math.floor(Math.random() * num);
        if(ran != pre){
            $("h1").text($("li").eq(ran).text());
            $("img").attr("src", imgurl[ran])
            pre = ran;
        }
        else{
            ran = (ran+1)%3;
            $("h1").text($("li").eq(ran).text());
            $("img").attr("src", imgurl[ran])
            pre = ran;
        }
    })
});