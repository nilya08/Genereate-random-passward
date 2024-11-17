const passwordbox = document.getElementById("password");
const btn = document.getElementById("btn");
const imge = document.getElementById("imge");


const length = 8;

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number = "=0123456789";
const symbol = "!@#$%^&*()_+-<>?/|}{[]";
const all = upperCase + lowerCase + number + symbol ;

function CreatePassward(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length > password.length){
        password += all[Math.floor(Math.random() * all.length)];
    }
    passwordbox.value = password;

}

function copyPassward(){
    passwordbox.select();
    document.execCommand("copy");
}
btn.addEventListener("click",()=>{
    CreatePassward();
})

imge.addEventListener("click",()=>{
    copyPassward();
})

