$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});
function updateProgress(){
    let hasChecked = 0;
    for(let x=0; x < $("[type='checkbox']").length;x++){
        if($("[type='checkbox']")[x].checked){
            hasChecked+=1;
        }
    }
    console.log("123");
    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value",hasChecked);
};