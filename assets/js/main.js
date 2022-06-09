/* Menu show Y hidden */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.getSelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    //when we click on each nav__link , we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Accordion skills */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.getElementsByClassName

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
