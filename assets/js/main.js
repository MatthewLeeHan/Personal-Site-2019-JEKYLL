// select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const rightSide = document.getElementById('right-side');
// set initial state of my menu
let showMenu = false; // using let because we want to directly reassign at times
const paragraph = document.getElementById('paragraph');
const linkHolder = document.getElementById('link-holder');
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        // menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // blur
        rightSide.classList.add('moveBack');
        paragraph.classList.add('moveBack');
        linkHolder.classList.add('moveBack');
        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        // menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;

        //blur
        rightSide.classList.remove('moveBack');
        paragraph.classList.remove('moveBack');
        linkHolder.classList.remove('moveBack');
    }
}
