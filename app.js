// USC coordinates
const USC = [34.0224, -118.2851];

const HOME = [39.9042, 116.4074];


// Create the map
const map = L.map("map").setView(USC, 13);


// Add OpenStreetMap
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// USC marker
L.marker(USC)
    .addTo(map)
    .bindPopup("I am studying at USC.")
    .openPopup();


// Hometown marker
L.marker(HOME)
    .addTo(map)
    .bindPopup("My hometown.");


// Find the buttons
const homeButton =
    document.getElementById("home-button");

const uscButton =
    document.getElementById("usc-button");

const status =
    document.getElementById("status");


// Take Me Home button
homeButton.addEventListener("click", function () {

    map.flyTo(HOME, 11);

    status.textContent =
        "Flying to my hometown...";
});


// Back to USC button
uscButton.addEventListener("click", function () {

    map.flyTo(USC, 13);

    status.textContent =
        "Back on campus at USC.";
});