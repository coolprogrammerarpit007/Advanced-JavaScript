`use strict`;

// Getting acess to the dom elemets.

const btn = document.getElementById(`location`);
const userLocation = document.querySelector(`.userLocation`);

// Getting User Longitude and Latitude

const getUserLocation = function () {
  if (`geolocation` in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // getting longitude of user
        const long = position.coords.longitude;

        // getting latitude of the user
        const lat = position.coords.latitude;

        // creating the dom elements
        const longPos = document.createElement(`h2`);
        longPos.textContent = `Longitude: ${long}`;
        const latPos = document.createElement(`h2`);
        latPos.textContent = `Latitude: ${lat}`;
        userLocation.append(longPos, latPos);
      },
      (error) => alert(`GPS Disabled`)
    );
  }
};

const showPosition = function () {
  getUserLocation();
};

btn.addEventListener(`click`, function () {
  showPosition();
});
