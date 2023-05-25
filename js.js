//работающий адаптивный слайдер с фото
const img = document.querySelectorAll (".sliderline img");
const sliderLine = document.querySelector ('.sliderline');
const dots = document.querySelectorAll (".tchk");
const cityNav = document.querySelectorAll (".city-nav__item");
const gridInfo = document.querySelectorAll (".description_grid");


let count = 0; 
let width;

// информация в грид-таблице по квартирам

/*let dataBase = {
    0: {
        city: "Rostov-On-Don, <br>Admiral",
        area: "85 m<sup>2", 
        time: "3.5 months", 
        cost: "Upon request",
    },
    1: {
        city: "Sochi <br>Thieves",
        area: "105 m<sup>2", 
        time: "4 months", 
        cost: "Upon request",
    },
    2: {
        city: "Rostov-On-Don <br>Patriotic",
        area: "93 m<sup>2", 
        time: "3 months", 
        cost: "Upon request",
    },
}

(function spanElement () {
    //let addSpan = 1;
    gridInfo.forEach ((item) => {
        let span = document.createElement ("span");
        item.append (span); 
        span.className = 'class_${addSpan++}';
    });
})();

function newGridInfo (index) {
    let spanCity = document.querySelector (".class_1");
    spanCity.innerHTML = dataBase[index].city;
    let spanArea = document.querySelector (".class_2");
    spanArea.innerHTML = dataBase[index].area;
    let spanTime = document.querySelector (".class_3");
    spanTime.innerHTML = dataBase[index].time;
    let spanCost = document.querySelector (".class_4");
    spanCost.innerHTML = dataBase[index].cost;
}*/


//функция расчета ширины страницы для вывода изображения 
function init () {
    console.log ('resize'); //вывод информации о пересчете размера страницы
    width = document.querySelector ('.slider').offsetWidth;  //расчет ширины страницы => надо узнать ширину основного блока slider, где находятся все картинки
    sliderLine.getElementsByClassName.width = width*img.length + 'px'; //необходимо увеличить ширину блока слайдера так, чтобы он был равен ширине слайдера умноженного на количество картинок
    // это позволит правильно расчитать ширину sliderLine
    img.forEach (item => {
        item.style.width = width + 'px';
        item.style.height = 'auto'; //высота изображений будет "подтягиваться" до автоматического
    });
    rollSlider();
}
 //изменение размера картинки при масштабировании
window.addEventListener ('resize', init); 
init ();

//перелистывание слайдера 
document.querySelector ('.prev').addEventListener ('click', function(){
    count--;
    if (count < 0) {
        count = img.length - 1;
    }
    start () ;
    // rollSlider();
    // dotSlide (count);
    // citySlide (count);
    
});

document.querySelector ('.next').addEventListener ('click', function(){
    count++;
    if (count >= img.length) {
        count = 0;
    }
    start () ;
    // rollSlider(); // корректирование картинки при измненение размера, убирает эффект "двойного слайда" - заново пересчитывается смещение и ширина
    // dotSlide (count); //в функцию передали значение счетчика, который служит index
    // citySlide (count);
    
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'; //смещение на ширину одного слайдера в пикселях
}
//активация точки при переходе на соответствующий слайд
function dotSlide (index) { //в index передается значение счетчика count при вызове функции
    dots.forEach (item => item.classList.remove ('active-dot'));
    dots[index].classList.add('active-dot');

}

dots.forEach ((dot, index) => {
    dot.addEventListener ("click", () => {
    count = index; //в функции присутствует свой счетчик, но он считает не от количества кликов, а в зависимости от индекса перелистывания при переборе; задается значение текущего индекса, который передается в остальные функции
    // rollSlider ();
    // dotSlide (count);
    // citySlide (count);
    start () ;
})
})

//активация городов
function citySlide (index) {
    cityNav.forEach (item => item.classList.remove ('active-city'));
    cityNav[index].classList.add('active-city');

}

cityNav.forEach ((city, index) => {
    city.addEventListener ("click", () => {
    count = index;
    start () 
    // rollSlider ();
    // citySlide (count);
    })
})

//функция, включающая сразу несколько функций, которые описаны были ранее
function start () {
    rollSlider ();
    dotSlide (count);
    citySlide (count);
    newGridInfo (count);
}



