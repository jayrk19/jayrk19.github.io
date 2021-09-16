let head= document.getElementById('nav');
let menu = head.querySelector('.menu');
console.log(menu);
let bars = head.getElementsByClassName('fa-bars')[0];
let times = head.getElementsByClassName('fa-times')[0];

let hide = () => {
  menu.style.height = "0px";
  menu.style.display = "none";
  bars.style.display = "block";
  times.style.display = "none";
};
let show = () => {
    menu.style.height = "250px";
    menu.style.display = "block";
    times.style.display = "block";
    bars.style.display = "none";
};
