let a=document.getElementById("divid");
a.style.backgroundColor="goldenrod";
a.style.width="400px";
a.style.margin="auto";
a.style.marginTop="100px";
a.style.borderRadius="20px";
a.style.boxShadow="2px 3px 4px";  

a.classList.add("text-center","p-5");

let b=document.createElement("input");
b.type="checkbox";
b.id="inpid";

a.appendChild(b);

let c=document.createElement("label");
c.textContent="Click Me!";
c.style.color="white";
c.style.marginLeft="5px";

a.appendChild(c);