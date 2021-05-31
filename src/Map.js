import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./App.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw";

const Map = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/pmodavis/ckpd0ay8v0efr17pceg1fgbe9",
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
