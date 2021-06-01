import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { GeolocateControl } from "mapbox-gl";

import "./App.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
    },
  ],
};

const Map = () => {
  const [longitude, setLongitude] = useState(-95.712891);
  const [latitude, setLatitude] = useState(37.09024);
  const [zoom, setZoom] = useState(2);

  const setCoordinates = async () => {
    //clicks the mapbox button
    let geoButton = document.querySelector(".mapboxgl-ctrl-geolocate");
    geoButton.dispatchEvent(new Event("click"));
    //clickes the main button
    let button = document.querySelector("button");
    button.innerText = "Loading...";
    //awaits coordinates
    const location = await getCoordinates();
    button.innerText = "Get Encounters";
    console.log(location);
  };

  const getCoordinates = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    makeMap(zoom);
  }, [longitude, latitude]);

  const makeMap = (magnify) => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/pmodavis/ckpeh637y08xj18qrb14covxq",
      center: [longitude, latitude],
      zoom: magnify,
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
    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
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
        <button onClick={() => setCoordinates()}>Get Encounters</button>
      </div>

      <div className="map-container mt-3" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
