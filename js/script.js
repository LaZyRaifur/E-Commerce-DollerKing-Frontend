let navbar = document.querySelector('.navbar');


document.querySelector('#menu-bar').onclick = () =>{
  navbar.classList.toggle('active');
}
document.querySelectorAll('#close').onclick  = () =>{
    navbar.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
}

let themeToggler = document.querySelector ('#theme-toggler');
themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  if(themeToggler.classList.contains('fa-sun')){
    document.querySelector ('body').classList.add('active');
    
  }else{
    document.querySelector('body').classList.remove('active');
  }

}