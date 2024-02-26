const menu = document.querySelector('.burger__menu');
const menuIcon = document.querySelector('.fa-bars');
const categories = document.querySelector('.mobile__categories');

menu.addEventListener('click', () => {
    if(menuIcon.classList.contains('fa-bars')){
        menuIcon.classList.replace('fa-bars','fa-xmark'); 
        categories.style.transform = "translateX(0px)"; 
        
        
    }else if(menuIcon.classList.contains('fa-xmark')){
        menuIcon.classList.replace('fa-xmark','fa-bars'); 
        categories.style.transform = "translateX(-100%)"; 

    }
});