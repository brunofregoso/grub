import { geoFindMe } from "./location.js";
let obj = {
    latitude: 0,
    longitude: 0,
};
await geoFindMe(obj);
console.log(obj.latitude);
console.log(obj.longitude);
let map;
async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  let center = new google.maps.LatLng(obj.latitude, obj.longitude);

  map = new Map(document.getElementById("map"), {
    center: center,
    zoom: 11,
    mapId: "DEMO_MAP_ID",
  });
}



async function nearbySearch() {
  //@ts-ignore
  const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary(
    "places",
  );
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  // Restrict within the map viewport.
  console.log(obj.latitude, obj.longitude);
  let center = new google.maps.LatLng(obj.latitude , obj.longitude);
  const request = {
    // required parameters
    fields: ["displayName", "location", "businessStatus"],
    locationRestriction: {
      center: center,
      radius: 10000,
    },
    // optional parameters
    includedPrimaryTypes: ["restaurant"],
    maxResultCount: 20,
    language: "en-US",
    region: "us",
  };
  //@ts-ignore
  const { places } = await Place.searchNearby(request);
  const randomRestaurant = places[Math.floor(Math.random() * places.length)];

  if (places.length) {
    console.log(places);

    const { LatLngBounds } = await google.maps.importLibrary("core");
    const bounds = new LatLngBounds();

    // Loop through and get all the results.
    const markerView = new AdvancedMarkerElement({
        map,
        position: randomRestaurant.location,
        title: randomRestaurant.displayName,
      });

      bounds.extend(randomRestaurant.location);
      console.log(randomRestaurant);
    map.fitBounds(bounds);
  } else {
    console.log("No results");
  }
}
document.getElementById("searchButton").addEventListener("click", nearbySearch);

initMap();