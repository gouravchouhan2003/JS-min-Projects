// Activity - Todo list:-

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    // console.log(inp.value);
    let li = document.createElement("li"); // create a new li on every click
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    li.innerText = inp.value;
    ul.appendChild(li);
    li.appendChild(delBtn);
    
    inp.value = "";
});

ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted!!!");
    }
});

