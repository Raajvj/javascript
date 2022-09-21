let a=document.getElementById("b1");
let b=document.getElementById("b2");
let c=document.getElementById("b3");
let d=document.getElementById("stop");
let e=document.getElementById("ready");
let f=document.getElementById("go");

function red(){
    a.style.backgroundColor="red";
    b.style.backgroundColor="";
    c.style.backgroundColor="";
    d.style.backgroundColor="red";
    e.style.backgroundColor="";
    f.style.backgroundColor="";

    
}
function yellow(){
    b.style.backgroundColor="yellow";
    a.style.backgroundColor="";
    c.style.backgroundColor="";
    e.style.backgroundColor="yellow";
    d.style.backgroundColor="";
    f.style.backgroundColor="";
}
function green(){
    c.style.backgroundColor="green";
    a.style.backgroundColor="";
    b.style.backgroundColor="";
    f.style.backgroundColor="green";
    d.style.backgroundColor="";
    e.style.backgroundColor="";
}