let a=document.getElementById("divid");
let b=document.createElement("input");
b.type="checkbox";
a.style.width="50%";
a.style.margin="auto";
a.style.marginTop="100px";
a.style.borderRadius="10px";
a.style.boxShadow="2px 3px 4px";
a.classList.add("text-center","p-5","bg-primary");
a.appendChild(b);
let c=document.createElement("label");
c.textContent="Clicke Me!";
// c.style.textDecoration="line-through";
c.style.marginLeft="8px";
a.appendChild(c);

function clic(){
    
    c.classList.toggle("strike-through");
}

b.onclick=function (){clic()};
