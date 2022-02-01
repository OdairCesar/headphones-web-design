/*---------------------- Show Menu ----------------------*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav__link'),
  header = document.getElementById('header')

if (navMenu) {
  /* Menu Show */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  /* Menu Hidden */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }
}

/*---------------------- Remove Menu Mobile ----------------------*/
function linkAction(){
  if(navMenu){
    navMenu.classList.remove('show-menu')
  }
}

if(navLink){
  navLink.forEach(n => n.addEventListener('click', linkAction))
}

/*---------------------- Change Background Header ----------------------*/
function scrollHeader(){
  if(header){
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)