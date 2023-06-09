// MENU HAMBURGER 

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('actif');
    mobile_menu.classList.toggle('actif');
});

const menu_links = Array.from(document.querySelectorAll('.mobile-nav a'));

menu_links.forEach(link => {
  link.addEventListener('click', function () {
      menu_btn.classList.remove('actif');
      mobile_menu.classList.remove('actif');
  });
})

// FIN MENU HAMBURGER 

let sections = document.querySelectorAll('section');
let mobileNav = document.querySelector('header .nav_container nav');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      mobileNav.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
      });
      const navLink = mobileNav.querySelector(`[href*='#${id}']`);
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
};

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal_img1,.reveal_img2');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}