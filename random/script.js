let div=document.getElementById("divid");
let btn=document.getElementById("btnid");
let clr=document.getElementById("colorid");
clr.style.borderRadius="15px";
clr.style.padding="100px";


let bgarray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];


    function touch(){
        clr.style.backgroundColor=bgarray[Math.floor(Math.random()*bgarray.length)];
    }touch();

let firstdiv=document.getElementById("fdiv");

firstdiv.style.border="5px solid black";








