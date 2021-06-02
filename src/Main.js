import React, { Component } from "react";

class Main extends Component {
  styles = {
    header: {
      fontFamily: "Squada One",
      fontSize: "100px",
    },
  };

  getBigfoot() {
    fetch(
      "https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {});
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-column flex-sm-row justify-content-center ">
          <h1 className="text-center" style={this.styles.header}>
            BIGFOOT ENCOUNTERS
          </h1>
        </div>
      </div>
    );
  }
}

export default Main;
