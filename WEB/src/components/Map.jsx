import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibHVjYTkyOTIiLCJhIjoiY2x0OHZ5czI0MHh5dTJpcXJyb3BzZzhrNSJ9.dh0hx2A1m4HH0TtRwiUkyg';

const mapStyle = 'mapbox://styles/mapbox/streets-v11';

const Map = ({ coordinates }) => {
    const mapContainer = useRef(null);
    
    useEffect(() => {
        if (!coordinates || coordinates.length !== 2 || isNaN(coordinates[0]) || isNaN(coordinates[1])) {
            return;
        }
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle,
            center: coordinates,
            zoom: 12
        });
        
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

        return () => map.remove();
    }, [coordinates]);

    return <div ref={mapContainer} style={{ width: '100%', height: '300px' }} />;
}

export default Map;
