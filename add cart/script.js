let a=document.getElementById("inpid");
let b=document.getElementById("ulid");
let btn=document.getElementById("btnid");
btn.style.color="white";
btn.style.borderRadius="7px";
btn.style.width="50px";
btn.style.height="35px";
btn.style.borderColor="lightblue";

 function add(){
    let val=a.value;
    let c=document.createElement("li");
    c.textContent=val;
    a.value="";
    b.appendChild(c);
 }
 