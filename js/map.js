ymaps.ready(init);

var myMap,
    bigMap = false;

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.942443, 30.334161],
        zoom: 13,
        controls: ['zoomControl', 'searchControl', 'geolocationControl']
    }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        // autoFitToViewport: 'always'
        searchControlProvider: 'yandex#search'
    });
    if (window.innerWidth < 650)
      myMap.setZoom(11);
    myMap.geoObjects
        .add(new ymaps.Placemark([59.957128, 30.308182], {
            hintContent: 'Университет ИТМО. Главный корпус',
            balloonContent: 'Университет ИТМО. Главный корпус<br />Кронверкский пр-к 49'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka1.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-10, -10]
        }))
        .add(new ymaps.Placemark([59.929276, 30.315396], {
            hintContent: 'Университет ИТМО',
            balloonContent: 'Университет ИТМО<br />Гривцова 14'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka2.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]
        }))
        .add(new ymaps.Placemark([59.939728, 30.349857], {
            hintContent: 'МИР Интерактивного Развития',
            balloonContent: 'МИР Интерактивного Развития<br />Короленко 4'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka3.png',
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

//window.onresize="apdateMapSize()";
/*
function apdateMapSize() {
  alert('window.innerWidth');
  myMap.container.fitToViewport();

  if (window.innerWidth < 1000)
    myMap.setZoom(2);
}*/

window.onresize = function resize() {
  if (window.innerWidth < 650)
    myMap.setZoom(11);
  else
      myMap.setZoom(13);
}
