import React, { Component } from 'react';
import { dojoRequire } from 'esri-loader';
import './App.css';

class EsriMap extends Component {

    constructor(props) {
        super(props)
        this.state = { mapLoaded: false }
    }

    mapLoaded()
    {
        this.setState({mapLoaded : true})
    }

    componentDidMount() {
        dojoRequire(['esri/Map',
            'esri/views/MapView',
            'esri/layers/FeatureLayer'],
            (Map, MapView, FeatureLayer) => {
                
                var map = new Map({ basemap: "dark-gray-vector" });
                var view = new MapView({
                    container: this.refs.map,
                    map: map,
                    extent: {
                        xmin: -9177811,
                        ymin: 4247000,
                        xmax: -9176791,
                        ymax: 4247784,
                        spatialReference: 102100,
                    },
                });

                view.then(() => {
                    this.mapLoaded();
                });

                map.add(new FeatureLayer({
                    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
                }));

            });
    }

    render() {

        const loadingStyle = {
            display: this.state.mapLoaded ? 'none' : 'inline-block',
        }

        return (
            <div>
                <div className="LoadingStyle" style={loadingStyle}><h1 className="Loading">Map Is Loading...</h1></div>
                <div className="EsriMapStyle" ref="map" />
            </div>)
    }

};

export default EsriMap;