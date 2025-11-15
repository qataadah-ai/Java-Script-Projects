const passwordBox = document.querySelector("#Password")
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRTUVWXYZ"
const LowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*({}[";

const alChars = upperCase + LowerCase + number + symbol

function createPassword(){
    let password = "";
password += upperCase[Math.floor(Math.random()*upperCase.length)]
password += LowerCase[Math.floor(Math.random()*LowerCase.length)]
password += number[Math.floor(Math.random()*number.length)]
password += symbol[Math.floor(Math.random()*symbol.length)]
 
while ( length > password.length){
    password += alChars[Math.floor(Math.random()*alChars.length)]
 
}
passwordBox.value = password


}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}