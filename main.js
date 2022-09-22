let img1 = document.getElementById('stars');
let img2 = document.getElementById('moon');
let img3 = document.getElementById('montains');
let img4 = document.getElementById('montains2');
let img5 = document.getElementById('river');
let img6 = document.getElementById('boat');
let RogerX = document.querySelector('.RogerX');
window.onscroll = function(){
    let value = scrollY;
    img1.style.left = value + 'px';
    img2.style.top = value * 4 + 'px';
    img3.style.top = value * 2 + 'px';
    img4.style.top = value * 1.5 + 'px';
    img5.style.top = value + 'px';
    img6.style.left = value * 3 + 'px';
    RogerX.style.fontSize = value + 'px';
    if(scrollY >= 74){
        RogerX.style.fontSize = 74 + 'px';
        RogerX.style.postision = 'fixed';
    }
}