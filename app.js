let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');


let fel_btn = document.querySelector('#fel-btn');
let felform = document.querySelector('.support .box-container .fel-form');

let closeform = document.querySelector('#closeform');





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




fel_btn.onclick = () =>{
   console.log('on');
   felform.classList.toggle('active');
   
}

closeform.onclick = () =>{
   console.log('stänger fromen');
   felform.classList.toggle('active');
}
