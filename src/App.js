import React, { Component } from 'react';
import './App.css';
import EsriLoader from 'esri-loader-react'
import EsriMap from './EsriMap'

class App extends Component {

  render() {

    const mapOptions = { url: 'https://js.arcgis.com/4.4/' }
    return (
      <div className="App">
        <div className="App-header">
        <EsriLoader options={mapOptions} />
          <div className="App-subheader"><h1>EsriJS and ReactJS</h1></div>
          </div>
        <EsriMap />
      </div>
    );
  }
}

export default App;
