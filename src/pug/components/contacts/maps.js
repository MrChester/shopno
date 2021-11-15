ymaps.ready(function () {  
    var map = new ymaps.Map("YMapsID", {
      center: [53.902284, 27.561831], 
      zoom: 11
    });

    if (map) {
      ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
        var placemark = new Placemark([55.37, 35.45]);
      });
    }

    map.behaviors
        .disable(['drag', 'rightMouseButtonMagnifier', 'ruler', 'scrollZoom'])
  });