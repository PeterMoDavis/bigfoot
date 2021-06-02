import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { GeolocateControl } from "mapbox-gl";

import "./App.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw";

const Map = () => {
  const [zoom, setZoom] = useState(2);

  let bigfootSightings = [];
  const getBigfoot = () => {
    fetch(
      "https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        bigfootSightings = data.features.map((each) => {
          return {
            description: each.attributes.descriptio,
            geometry: {
              coordinates: [each.geometry.x, each.geometry.y],
            },
          };
        });
      })
      .then(() => {
        makeMap(zoom);
      });
    console.log(bigfootSightings);
  };

  const getCoordinates = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const userPosition = async () => {
    const locationButton = document.querySelector(".mapboxgl-ctrl-geolocate");
    const click = new Event("click");
    locationButton.dispatchEvent(click);
    document.querySelector("button").innerText = "Loading...";
    const location = await getCoordinates();
    document.querySelector("button").innerText = "Here we are.";
    setTimeout(() => {
      document.querySelector("button").innerText = "Get Encounters";
    }, 3000);

    console.log("hello");
  };

  useEffect(async () => {
    await getBigfoot();
    console.log(bigfootSightings);
  }, []);

  const makeMap = (magnify, lat = -95.712891, lon = 37.09024) => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/pmodavis/ckpeh637y08xj18qrb14covxq",
      center: [lat, lon],
      zoom: magnify,
    });

    bigfootSightings.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.addControl(new mapboxgl.GeolocateControl(), "top-right", {
      positionOptions: {
        enableHighAccuracy: true,
      },
      fitBoundsOptions: {
        maxZoom: 15,
      },
      showAccuracyCircle: true,
      trackUserLocation: true,
    });

    // clean up on unmount
    return () => map.remove();
  };

  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="d-flex flex-column align-items-center main-container">
      <div className="text-center">
        <button onClick={() => userPosition()}>Get Encounters</button>
      </div>

      <div className="map-container mt-3" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
