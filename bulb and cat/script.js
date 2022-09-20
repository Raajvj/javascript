let a=document.getElementById("bulb");
let b=document.getElementById("cat");
let c=document.getElementById("onclick");
let d=document.getElementById("offclick");
let e=document.getElementById("text");

function on(){
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    c.style.backgroundColor="green";
    d.style.backgroundColor="";
    e.textContent="Switch On";
}

function off(){
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    d.style.backgroundColor="red";
    c.style.backgroundColor="";
    e.textContent="Switch Off";
    
}

