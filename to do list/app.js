const inputBox =document.querySelector("#input-box")
const listContanier =document.querySelector("#list-contanier")

function addTask(){
     if(inputBox.value === ''){
   alert("you must write something")
     }else{
        let li =document.createElement("li")
        li.innerHTML=inputBox.value;
    listContanier.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML="\u00d7";
    li.appendChild(span)
     }
 inputBox.value="";

 saveData()

}

listContanier.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")

    saveData()

}
else if (e.target.tagName === "SPAN"){
e.target.parentElement.remove();

saveData()

}

} , false);


function saveData(){
localStorage.setItem("data",listContanier.innerHTML)
}


function showTask(){
    listContanier.innerHTML=localStorage.getItem("data")
}
showTask()

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
