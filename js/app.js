function initMap() {
  var myLatLng = [
      {lat: -16.1511485, lng: -71.531948},{lat: -15.4521485, lng: -71.532948},{lat: -16.4531485, lng: -74.533948},{lat: -15.4541485, lng: -73.534948},{lat: -16.4571485, lng: -71.532948}];
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.4571485, lng: -71.532948},
    zoom: 8
  });
  // Create a marker and set its position.
    for(var i=0;i<=myLatLng.length;i++){
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng[i],
          title: 'Hello World!',
          icon:"img/taxi2.png"
        });
    }
};