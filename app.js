let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

let closeform = document.querySelector('#closeform');

let it_btn = document.querySelector('#it-btn');
let itform = document.querySelector('.support .box-container .form');

let fel_btn = document.querySelector('#fel-btn');
let felform = document.querySelector('.support .box-container .form');


let sup_btn = document.querySelector('#sup-btn');
let supform = document.querySelector('.support .box-container .form');

let count_btn = document.querySelector('#count-btn');
let countform = document.querySelector('.support .box-container .form');

// mobil meny

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }
  else{
     header.classList.remove('active');
  }

}

// supportknappar


it_btn.onclick = () =>{
   console.log('öppnar IT');
   itform.classList.toggle('active');
   
}

closeform.onclick = () =>{
   console.log('stänger');
   itform.classList.toggle('active');
}



fel_btn.onclick = () =>{
   console.log('öppnar felanmälan');
   felform.classList.toggle('active');
   
}

closeform.onclick = () =>{
   console.log('stänger');
   felform.classList.toggle('active');
}

sup_btn.onclick = () =>{
   console.log('öppnar toner');
   supform.classList.toggle('active');
   
}

closeform.onclick = () =>{
   console.log('stänger');
   supform.classList.toggle('active');
}

count_btn.onclick = () =>{
   console.log('öppnar mätarställning');
   countform.classList.toggle('active');
   
}

closeform.onclick = () =>{
   console.log('stänger');
   countform.classList.toggle('active');
}
