const PI=3.14;
let radius;
let area;

document.getElementById("textBox").oninput=function(){
    radius=document.getElementById("textBox").value;
    radius=Number(radius);
    area=PI * radius **2;
    document.getElementById("result").textContent=area + "cm squared"
}