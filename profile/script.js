let div=document.getElementById("divid");
let img=document.getElementById("imgid");
div.classList.add("text-center","bg-primary",);
div.style.width="40%";
div.style.height="550px";
div.style.margin="auto";
div.style.marginTop="100px";
div.style.marginBottom="100px";
div.style.borderRadius="20px";
div.style.boxShadow="2px 3px 4px red";

let profile={
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    Name:"RaaJ",
    Age:27
};

img.src=profile.imgsrc;
img.style.marginTop="100px";
div.appendChild(img);

let p=document.createElement("h3");
p.textContent=profile.Name;
p.style.marginTop="40px";
p.style.color="white";
div.appendChild(p);

let age=document.createElement("h3");
age.textContent="Age:"+profile.Age;
age.style.marginTop="10px";
age.style.color="white";
div.appendChild(age);