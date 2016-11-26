ymaps.ready(init);

var myMap,
    bigMap = false;

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.942443, 30.334161],
        zoom: 13
    }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        // autoFitToViewport: 'always'
        searchControlProvider: 'yandex#search'
    });
    myMap.geoObjects
        .add(new ymaps.Placemark([59.957128, 30.308182], {
            hintContent: 'Университет ИТМО. Главный корпус',
            balloonContent: 'Университет ИТМО. Главный корпус<br />Кронверкский пр-к 49'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]
        }))
        .add(new ymaps.Placemark([59.929276, 30.315396], {
            hintContent: 'Университет ИТМО',
            balloonContent: 'Университет ИТМО<br />Гривцова 14'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka4.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]
        }))
        .add(new ymaps.Placemark([59.939728, 30.349857], {
            hintContent: 'МИР Интерактивных Разработок',
            balloonContent: 'МИР Интерактивных Разработок<br />Короленко 4'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka4.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]
        }))
        .add(new ymaps.Placemark([59.926837, 30.337894], {
            hintContent: 'Университет ИТМО',
            balloonContent: 'Университет ИТМО<br />Ломоносова 9'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka4.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]
        }))
        myMap.behaviors.disable('scrollZoom');
}


onresize="apdateMapSize()";

function apdateMapSize() {
  myMap.container.fitToViewport();
}
