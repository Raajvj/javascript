let div1=document.getElementById("div1id");
let head=document.getElementById("headid");
let image=document.getElementById("imgid");

let div2=document.getElementById("div2id");


let recipe = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

head.textContent=recipe.title;
div1.classList.add("text-danger","text-center");
head.style.fontSize="40px";
div1.appendChild(head);
image.src=recipe.imgSrc;
image.style.width="30%";
image.style.borderRadius="20px";
image.style.boxShadow="2px 3px 4px black";
div1.appendChild(image);

let unlist=document.getElementById("ulid");
let ing=recipe.ingredients;

for(let i of ing)
{
let list=document.createElement("li");
list.textContent=i;
unlist.appendChild(list);
}
div2.classList.add("col-6");
div2.style.color="white";
div2.style.width="30%";
div2.style.height="280px";
div2.style.marginTop="20px";
div2.style.borderRadius="20px";
div2.style.paddingLeft="30px";
div2.style.paddingTop="30px";
div2.style.margin="auto";
div2.style.marginTop="20px";
div2.style.backgroundColor="#0b3559";
div2.style.boxShadow=("2px 3px 4px black");
