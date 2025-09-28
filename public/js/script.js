const socket = io();

if(navigator.geolocation){
    // watchPosition can take 3 args: 1. successCallback, errorCallback, positionOptions(settings)
    navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;

            socket.emit("send-location", {latitude, longitude});  // send this event from fontend with the data of latitude and longitude
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,  // send location after each 5 seconds
            maximumAge: 0,   // disable caching, no saved data
        }
    );
}

const map = L.map("map").setView([0, 0], 16);   // L is given by leaflet cdn, which is for loading map. And we set the view at [0,0] coords which is center of earth, and a max zoom level of 10

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "- By Harsh"
}).addTo(map);


// create an empty object markers
const markers = {};

socket.on("receive-location", (data) => {
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude]);  // view set krdo map ka, with new coords

    // if current id is already present in markers object, means user is already on the map, just update his location(move marker to new coords)
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }
    // else use Leaflet to create a new marker at the coords of the user and add it to map
    else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});


socket.on("user-disconnected", (id) => {
    // if there is a marker present for this user, remove it from the map layer
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})