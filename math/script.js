let sp1=document.getElementById("fval");
let sp2=document.getElementById("sval");
let user=document.getElementById("inpid");
let game=document.getElementById("result");

let success="Congratulations!";
let tryagain="Please Try Again!";

let img=document.getElementById("imgid");
img.style.width="50%";

function reset(){
    let frn=Math.random()*100;
    let srn=Math.random()*100; 

    sp1.textContent=Math.ceil(frn);
    sp2.textContent=Math.ceil(srn);
    game.textContent="";
    user.value=""; 
  
    game.style.padding="";
    
    game.style.margin="";
    game.style.marginTop="";
    game.style.borderRadius="";
    game.style.marginLeft="";
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
       
        game.style.padding="15px";
        
        game.style.marginTop="10px";
        game.style.borderRadius="10px";
      

        

    }
    else{
        game.textContent=tryagain;
        game.style.backgroundColor="#1e217c";
        game.style.color="white";
      
        game.style.padding="15px";
        
        game.style.marginTop="10px";
        game.style.borderRadius="10px";
        
        


    }
}

let b1=document.getElementById("btn1");
let b2=document.getElementById("btn2");
b1.style.backgroundColor="blue";
b1.style.width="80px";

b1.style.borderRadius="10px";
b1.style.borderColor="blue";
b1.style.color="white";


b2.style.backgroundColor="blue";
b2.style.width="80px";

b2.style.borderRadius="10px";
b2.style.borderColor="blue";
b2.style.color="white";

let main=document.getElementById("one");
main.style.margin="auto";
main.style.border="solid 1px black";
main.classList.add("col-4");
main.style.marginTop="100px";
main.style.backgroundColor="pink";
main.style.borderRadius="10px";


user.style.width="60px";
        
       
        