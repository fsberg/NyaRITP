let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

let it_closeform = document.querySelector('.it-form #closeform');
let fel_closeform = document.querySelector('.fel-form #closeform');
let sup_closeform = document.querySelector('.sup-form #closeform');
let count_closeform = document.querySelector('.count-form #closeform');

let glass = document.querySelector('.glass');

let it_btn = document.querySelector('#it-btn');
let itform = document.querySelector('.support .box-container .it-form');


let fel_btn = document.querySelector('#fel-btn');
let felform = document.querySelector('.support .box-container .fel-form');

let sup_btn = document.querySelector('#sup-btn');
let supform = document.querySelector('.support .box-container .sup-form');

let count_btn = document.querySelector('#count-btn');
let countform = document.querySelector('.support .box-container .count-form');

let downArrow = document.querySelector('.down_arrow');
let up_btn = document.querySelector('.up_btn');
// function scrollDown() {
//    const target = document.getElementById('about'); 
//    target.scrollIntoView({ behavior: 'smooth' });
// }

function scrollDown() {
   window.scrollBy({
      top: 800,
      behavior: 'smooth'
   });
}

window.addEventListener('scroll', () => {
   if (window.scrollY > 100) { 
      downArrow.style.display = 'none';
      downArrow.style.transition = '1s ease-in';
   } else {
      downArrow.style.display = 'flex';
      downArrow.style.transition = '1s ease-out';
   }
});

window.addEventListener('scroll', () => {
   if (window.scrollY > 100) { 
      up_btn.style.display = 'flex';

   } else {
      up_btn.style.display = 'none';

   }
});


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
   glass.classList.toggle('active');
   
}

it_closeform.onclick = () =>{
   console.log('stänger');
   itform.classList.toggle('active');
   glass.classList.toggle('active');
}

fel_btn.onclick = () =>{
   console.log('öppnar felanmälan');
   felform.classList.toggle('active');
}

fel_closeform.onclick = () =>{
   console.log('stänger');
   felform.classList.toggle('active');
}

sup_btn.onclick = () =>{
   console.log('öppnar toner');
   supform.classList.toggle('active');
}

sup_closeform.onclick = () =>{
   console.log('stänger');
   supform.classList.toggle('active');
}

count_btn.onclick = () =>{
   console.log('öppnar mätarställning');
   countform.classList.toggle('active');  
}

count_closeform.onclick = () =>{
   console.log('stänger');
   countform.classList.toggle('active');
}
