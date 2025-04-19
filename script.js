let load=document.getElementById("loading");
let uls=document.querySelectorAll("ul");
let logo=document.getElementById("logo");
let welcome=document.getElementById("welcome");
function loadding(){
    load.style.display="none";
    logo.style.animation="logo 0.4s";
    welcome.style.animation="welcome 0.4s";
    uls.forEach((ul)=>{
        ul.style.animation="ul 0.4s";
    })
}
setTimeout(loadding,2000)