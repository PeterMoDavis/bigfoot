import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { GeolocateControl } from "mapbox-gl";

import "./App.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw";

const Map = () => {
  const [longitude, setLongitude] = useState(-95.712891);
  const [latitude, setLatitude] = useState(37.09024);
  const [zoom, setZoom] = useState(2);

  const setCoordinates = async () => {
    let geoButton = document.querySelector(".mapboxgl-ctrl-geolocate");
    geoButton.dispatchEvent(new Event("click"));
  };

  useEffect(() => {
    makeMap(zoom);
  }, [longitude, latitude]);

  const makeMap = (magnify) => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/pmodavis/ckpd0ay8v0efr17pceg1fgbe9",

      center: [longitude, latitude],
      zoom: magnify,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.addControl(new mapboxgl.GeolocateControl(), "bottom-left", {
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
    <div className="">
      <div className="text-center">
        <button onClick={() => setCoordinates()}>Get Encounters</button>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="map-container" ref={mapContainerRef} />
      </div>
    </div>
  );
};

export default Map;
