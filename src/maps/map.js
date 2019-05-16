// Initialize the platform object:
var platform = new H.service.Platform({
    'app_id': 'vjy6uZJ1g8cBFrsFC8qX',
    'app_code': 'JDE3TVLeWDjefVi30qzdaw'
});
  
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();

var latitude;
var longitude;
var driverCoordinates;

function showPosition(position) {
   latitude= position.coords.latitude;
   longitude= position.coords.longitude;
   driverCoordinates= latitude+","+longitude;
}


function calculateAlternateRoute(){
$.ajax({
  url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'jsoncallback',
  data: {
    waypoint0: driverCoordinates,
    waypoint1: '52.5253,13.3693',
    mode: 'fastest;car',
    alternatives: '4',
    app_id: 'vjy6uZJ1g8cBFrsFC8qX',
    app_code: 'JDE3TVLeWDjefVi30qzdaw'
  },
  success: function (data) {
    console.log(JSON.stringify(data));
  }
});
}     

function calculateBestRoute(){
$.ajax({
  url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'jsoncallback',
  data: {
    waypoint0: driverCoordinates,
    waypoint1: '52.5206,13.3862',
    mode: 'fastest;car;traffic:enabled',
   app_id: 'vjy6uZJ1g8cBFrsFC8qX',
    app_code: 'JDE3TVLeWDjefVi30qzdaw',
    departure: 'now'
  },
  success: function (data) {
    console.log(JSON.stringify(data));
  }
});
}