ymaps.ready(init);

var myMap,
    bigMap = false;

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.957128, 30.308182],
        zoom: 16
    }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        // autoFitToViewport: 'always'
        searchControlProvider: 'yandex#search'
    });
    myMap.geoObjects
        .add(new ymaps.Placemark([59.957128, 30.308182], {
            balloonContent: 'Университет ИТМО'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        myMap.behaviors.disable('scrollZoom');
}


onresize="apdateMapSize()";

function apdateMapSize() {
  myMap.container.fitToViewport();
}
