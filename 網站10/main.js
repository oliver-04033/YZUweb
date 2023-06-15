let thisbutton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showdata");
thisbutton.addEventListener("click", loadSeverData);

function loadSeverData(){
    console.log("load sever data");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("no");
        return;
    }
    xmlHttpRequest.open("GET", "DataFromServer.txt", true);
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange = function(){
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            thisbutton.style.visibility = "hidden";
        }
    }
}