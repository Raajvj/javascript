let sp1=document.getElementById("fval");
let sp2=document.getElementById("sval");
let user=document.getElementById("inpid");
let game=document.getElementById("result");

let success="Congratulations!";
let tryagain="Please Try Again!";

let img=document.getElementById("imgid");
img.style.width="40%";

function reset(){
    let frn=Math.random()*100;
    let srn=Math.random()*100; 

    sp1.textContent=Math.ceil(frn);
    sp2.textContent=Math.ceil(srn);
    game.textContent="";
    user.value=""; 
}
reset();

function check(){
    let frint=parseInt(sp1.textContent);
    let srint=parseInt(sp2.textContent);
    let uint=parseInt(user.value);

    let sum=frint+srint;
    if(uint===sum){
        game.textContent=success;
        game.style.backgroundColor="#028a0f";
        game.style.color="white";
    }
    else{
        game.textContent=tryagain;
        game.style.backgroundColor="#1e217c";
        game.style.color="white";

    }
}

let b1=document.getElementById("btn1");
let b2=document.getElementById("btn2");
b1.style.backgroundColor="blue";
b1.style.width="80px";
b1.style.marginLeft="70px";
b1.style.borderRadius="10px";
b1.style.borderColor="blue";
b1.style.color="white";


b2.style.backgroundColor="blue";
b2.style.width="80px";
b2.style.marginLeft="20px";
b2.style.borderRadius="10px";
b2.style.borderColor="blue";
b2.style.color="white";

game.style.height="50px"
game.style.width="230px";
game.style.marginLeft="420px";
game.style.marginTop="10px";
game.style.borderRadius="20px";
game.style.paddingTop="10px";
