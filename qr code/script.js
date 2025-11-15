let imgBox =document.querySelector('.imgBox');
let qrImage =document.querySelector('#qrImage');
let qrText =document.querySelector('#qrText');

function generateQR() {
    if(qrText.value.length > 0) {

 qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
+ qrText.value;
imgBox.classList.add("show-img")
button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.cursor = "not-allowed";
setTimeout(()=>{
button.style.backgroundColor = "";
    button.style.color = "";
    
    
},500)

    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }


}
let button = document.querySelector("button");
qrText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQR();
  }
});
