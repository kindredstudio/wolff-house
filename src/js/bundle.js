import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {

  var ANIMATE_TIME = 300;
  var map = null;

  // title page fade
  $('.titlefade').delay(1250).fadeOut(2500);

  // slide toggle
  $('.hidden').hide();

  function closeNav() {
    $('.expanded')
      .removeClass('expanded')
      .next('.hidden')
      .slideToggle(ANIMATE_TIME);
  }

  $('.trigger').on('click', function() {
    var isOpen = $(this).hasClass('expanded');

    if (isOpen) {
      closeNav();
      return;
    }

    closeNav();

    $(this)
      .addClass('expanded')
      .next('.hidden')
      .slideToggle(ANIMATE_TIME);
  });

  // mobile menu
  $('.mm-trigger').on('click', function() {
    $(".mm-overlay").fadeToggle(ANIMATE_TIME);
  });

  $(".mm-close").on('click', function() {
    $('.mm-overlay').fadeOut(ANIMATE_TIME);
  });

  // init slick
  // const siteURL = WPURLS.siteurl;
  // const prevArrow = `
  // <button class="slick-prev" aria-label="Next Slide">
  //   <img src="${siteURL}/wp-content/themes/wolff-co/assets/images/arrow-left_spice.png"/ alt="Next Arrow">
  // </button>`;
  // const nextArrow = `
  // <button class="slick-next" aria-label="Previous Slide">
  //   <img src="${siteURL}/wp-content/themes/wolff-co/assets/images/arrow-right_spice.png"/ alt="Previous Arrow">
  // </button>`;
  //
  // const $workSlider = $('.work-slider');
  //
  // const workSettings = {
  //   dots: false,
  //   arrows: true,
  //   autoplay: false,
  //   prevArrow,
  //   nextArrow
  // };
  //
  // $workSlider.slick(workSettings);

  // Google maps
  $('.acf-map').each(function(){
		var map = initMap( $(this) );
	});

  function initMap( $el ) {
  	var $markers = $el.find('.marker');

    var args = {
    zoom: 15,
    center: new google.maps.LatLng(0, 0),
    mapTypeControl: false,
    panControl: false,
    scrollwheel: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
  	};

  	var map = new google.maps.Map( $el[0], args);

  	map.markers = [];
  	$markers.each(function(){
      	initMarker( $(this), map );
  	});

  	centerMap( map );

  	return map;
  }

  function initMarker( $marker, map ) {

    var lat = $marker.data('lat');
    var lng = $marker.data('lng');
    var latLng = {
        lat: parseFloat( lat ),
        lng: parseFloat( lng )
    };

  	var marker = new google.maps.Marker({
      position : latLng,
      map: map,
      icon: {
        url: "http://localhost:3000/wp-content/themes/wolff-house/assets/images/map.png"
      }
  	});

  	map.markers.push( marker );

  	if( $marker.html() )
  	{
      var infowindow = new google.maps.InfoWindow({
          content: $marker.html()
      });

      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open( map, marker );
      });
  	}
  }

  function centerMap( map ) {
    var bounds = new google.maps.LatLngBounds();
    map.markers.forEach(function( marker ){
        bounds.extend({
            lat: marker.position.lat(),
            lng: marker.position.lng()
        });
    });

    if( map.markers.length == 1 ){
        map.setCenter( bounds.getCenter() );

    } else{
        map.fitBounds( bounds );
    }
  }

});
