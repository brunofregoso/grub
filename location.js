export function geoFindMe(obj) {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
      } else {
        navigator.geolocation.getCurrentPosition(
          position => {
            obj.latitude = position.coords.latitude;
            obj.longitude = position.coords.longitude;
            resolve();
          },
          () => {
            reject(new Error("Unable to retrieve your location"));
          }
        );
      }
    });
  }