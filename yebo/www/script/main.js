'use strict';

let slides = document.getElementsByClassName('slider__item');

// открыть новый слайд
function showSlide(slide_number) {
    if (!slide_number) {
        return;
    }

    let new_slide;

    // ищем слайд с новым номером и запоминаем его
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].getAttribute('data-number') == slide_number) {
            new_slide = slides[i];
            break;
        }
    }

    // закрываем все слайды кроме нового
    closeOtherSlides(slides);
    new_slide.classList.add('slider__item_active');

    // закрасить новую кнопку-точку
    onChangeDot(slide_number);
}

// закрытие всех слайдов
function closeOtherSlides(slides) {
    if (slides.length == 0) {
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider__item_active');
    }
}

// изменение состояния кнопки-точки
function onChangeDot(slide_number) {
    if (!slide_number) {
        return;
    }

    let dots = document.getElementsByClassName('dot');
    let new_dot;

    // ищем новую кнопку-точку и запоминаем
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].getAttribute('data-number') == slide_number) {
            new_dot = dots[i];
            break;
        }
    }


    // отключаем все остальные точки и включаем нужную
    onDisactiveDot(dots);
    new_dot.classList.add('dot_active');
}

function onDisactiveDot(dots) {
    if (dots.length == 0) {
        return;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_active');
    }
}
