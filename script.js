var menu = document.querySelector('.menu');
var navbar = document.querySelector('ul');

menu.addEventListener('click',a);
function a(){
    navbar.classList.toggle('slide');
}
function reservation(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("contact").value;
    let c=document.getElementById("table").value;
    if(a=="")
    {
        alert("Please provide a Name!");
    }
    if(c==0)
    {
        alert("Enter a Valid Number!");
    }
    else
    {
        alert("Table booked!");
    }

}
function loading(){
document.querySelector('.loader').classList.add('fade-out');
}
function fadeout(){
setInterval(loading,3000);
}
window.onload=fadeout;
