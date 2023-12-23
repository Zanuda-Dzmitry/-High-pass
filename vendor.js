ymaps.ready(init)
function init() {
	var myMap = new ymaps.Map('map', {
		center: [55.769383, 37.638521],
		zoom: 14,
		controls: [],
	})

	var myPlacemark = new ymaps.Placemark(
		[55.769383, 37.638521],
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: 'images/sprite.svg#contact-svg',
			iconImageSize: [80, 80],
			iconImageOffset: [-3, -42],
		}
	)
	myMap.geoObjects.add(myPlacemark)
}
