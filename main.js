/*
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");

let showMenu = false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        navBar.classList.add('show');
        
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        navBar.classList.remove('show');
        
        showMenu = false;
    }

}*/
const menuBtn = document.querySelector(".menu-btn");

const navBar = document.querySelector('.navbar');

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
    navBar.classList.toggle('active');
});

