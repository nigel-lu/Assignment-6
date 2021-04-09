import moment from "moment";

const hideSpicyItem = document.getElementById("hide-spicy-button");
var sf = document.getElementsByClassName("spicy");
const displaySpicyItem = document.getElementById("all-button");
const addNewItem = document.getElementById("add-button");
const list = document.getElementById("lunch-list");
const input = document.getElementById("item-name");

//using moment.js to call current time

let m = document.createTextNode(moment().toString());
document.getElementById("current-time").appendChild(m);



//change spicy text to red & add (spicy)
let a;
for (a = 0; a < sf.length; a++) {
    let y = document.createTextNode("(spicy)");
    sf[a].style.color = "red";
    sf[a].appendChild(y);
}

//hide spicy item
hideSpicyItem.addEventListener("click", ()=>{
    let i;
    for (i = 0; i < sf.length; i++) {
        sf[i].style.display = "none";
    } 
}
)

//display spicy item
displaySpicyItem.addEventListener("click", ()=>{
    let i;
    for (i = 0; i < sf.length; i++) {
        sf[i].style.display = "block";
    } 
}
)

//add new item
addNewItem.addEventListener("click", () => {
    let textInput = input.value;
    let li = document.createElement('li');
    li.innerHTML = textInput;
    list.appendChild(li);
    input.value = "";
})

