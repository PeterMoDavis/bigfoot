import React, { Component } from "react";

class Main extends Component {
  styles = {
    header: {
      fontFamily: "Squada One",
      fontSize: "100px",
    },
  };

  mapURL =
    "https://api.mapbox.com/?access_token={pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw}";

  getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    } else {
      alert(
        "Sorry must accept location request or we can't tell you where the bigfoot is."
      );
    }
  }

  getMap() {
    fetch(this.mapURL)
      .then((res) => res)
      .then((data) => {
        console.log(data);
      });
  }

  getBigfoot() {
    fetch(
      "https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  componentDidMount() {
    this.getLocation();
    this.getBigfoot();
    this.getMap();
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h1 style={this.styles.header}>BIGFOOT ENCOUNTERS</h1>
        </div>
      </div>
    );
  }
}

export default Main;
