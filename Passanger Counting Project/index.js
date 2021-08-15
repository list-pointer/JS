// let countPara=document.getValueById('count-el');
let currPara = document.getElementById('save-el');
// let currPara=document.getValueById('save-el');
let count = 0;

function incrementValue() {
    count++;
    document.getElementById("count-el").innerText = count;
}

function saveValue() {
    let Para = count+" - ";
    currPara.textContent += Para; //text content is better vs inner text
    console.log(Para); 

    count=0;
    document.getElementById("count-el").innerText = count;
}

// let name="Abhishek";
// let greeting=" Welcome Back !!!";

// document.getElementById('welcome-el').innerText=name+greeting;