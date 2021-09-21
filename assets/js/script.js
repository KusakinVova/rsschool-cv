// update skills line
const updateSkills = function(){
    const arSkills = document.querySelectorAll('.cv-skills-item');
    for (let i = 0; i < arSkills.length; i++) {
        let dataEx = arSkills[i].getAttribute('data-ex');
        let innerSpan = document.createElement('span');
        innerSpan.style.width = `${dataEx}%`;
        arSkills[i].appendChild(innerSpan);
    }
};
updateSkills();

// create mobile menu
const createMobMenu = function(){
    const body = document.querySelector('.cv');
    
    const Menu = document.querySelector('.nav_menu');
    let Menu2 = Menu.cloneNode(true);
    Menu2.classList.remove('nav_menu_desktop');

    let innerDivCloser = document.createElement('div');
    innerDivCloser.classList.add("nav_toggle_hidde");
    innerDivCloser.setAttribute("onclick","hiddeMobMenu('');");

    let innerDiv = document.createElement('div');
    innerDiv.classList.add("nav_mobmenu");
    innerDiv.appendChild(Menu2);
    innerDiv.appendChild(innerDivCloser);
    
    const mob_nav_link = innerDiv.querySelectorAll('.nav_link');
    for (let index = 0; index < mob_nav_link.length; index++) {
        mob_nav_link[index].setAttribute("onclick","hiddeMobMenu('');");
    }

    body.appendChild(innerDiv);
}
createMobMenu();

const showMobMenu = function(){ 
    const burger_menu = document.querySelector('.burger_menu');
    burger_menu.classList.remove('nav_toggle');
    burger_menu.classList.add("nav_toggle_hidde2");
    burger_menu.setAttribute("onclick","hiddeMobMenu('');");

    const blockMenu = document.querySelector('.nav_mobmenu');
    fadeIn(blockMenu, 1)
}

const hiddeMobMenu = function(){
    const burger_menu = document.querySelector('.burger_menu');
    burger_menu.classList.remove('nav_toggle_hidde2');
    burger_menu.classList.add("nav_toggle");
    burger_menu.setAttribute("onclick","showMobMenu('');");

    const blockMenu = document.querySelector('.nav_mobmenu');
    fadeOut(blockMenu, 1);
}

function getCssProperty(element, property){
    let elem = document.querySelector(element);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function fadeIn(el, speed) {
    let step = 5 / speed;
    let interval = setInterval(function() {
        let left_val = parseInt(getCssProperty('.nav_mobmenu', 'left'));
        if (left_val == 0){
            clearInterval(interval);
        }
        el.style.left = left_val + step + 'px';
    }, speed / 10);
}

function fadeOut(el, speed) {
    let step = 5 / speed;
    let interval = setInterval(function() {
        let width_val = parseInt(getCssProperty('.nav_mobmenu', 'width'));
        let left_val = parseInt(getCssProperty('.nav_mobmenu', 'left'));
        if (left_val < -width_val){
            clearInterval(interval);
        }
        el.style.left = left_val - step + 'px';
    }, speed / 10);
}


//----------------------
// info
console.log("Самооценка 160(160)");
console.log("+10 = вёрстка валидная ");
console.log("+20 = вёрстка семантическая ");
console.log("+10 = для оформления СV используются css=стили");
console.log("+10 = контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы");
console.log("+10 = вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется");
console.log("+10 = есть адаптивное бургер=меню.");
console.log("+10 = на странице СV присутствует изображение ");
console.log("+10 = контакты для связи и перечень навыков оформлены в виде списка ul > li");
console.log("+10 = CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского");
console.log("+10 = CV содержит пример вашего кода ");
console.log("+10 = CV содержит изображения=ссылки на выполненные вами проекты. ");
console.log("+10 = CV выполнено на английском языке ");
console.log("+10 = выполнены требования к Pull Request");
console.log("+10 = есть видеорезюме автора CV на английском языке.");
console.log("+10 = дизайн, оформление");
