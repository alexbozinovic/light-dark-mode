const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
let modeSet = '';

// Toggle Between Light and Dark Modes
function isLight(check){
    check ? modeSet = 'light' : modeSet = 'dark';

    document.documentElement.setAttribute('data-theme', modeSet);

    nav.style.backgroundColor = check ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50% )';
    textBox.style.backgroundColor = check ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = check ? 'Light Mode' : 'Dark Mode';
    check ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')

    image1.src = `img/undraw_proud_coder_${modeSet}.svg`;
    image2.src = `img/undraw_feeling_proud_${modeSet}.svg`;
    image3.src = `img/undraw_conceptual_idea_${modeSet}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event){
    if( event.target.checked){
        localStorage.setItem('theme', 'dark');
        isLight(false);
    } else{
        localStorage.setItem('theme', 'light');
        isLight(true);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        isLight(false);
    } 
    
    if(currentTheme === 'light'){
        toggleSwitch.checked = false;
        isLight(true);
    }
}