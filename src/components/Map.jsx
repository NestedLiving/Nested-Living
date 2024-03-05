
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibHVjYTkyOTIiLCJhIjoiY2x0OHZ5czI0MHh5dTJpcXJyb3BzZzhrNSJ9.dh0hx2A1m4HH0TtRwiUkyg';


export default function Map() {
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

        const getCurrentPosition = () => {
            return new Promise((resolve, reject) => {
                if (!navigator.geolocation) {
                    reject(new Error('Geolocation is not supported by your browser'));
                } else {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            resolve({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            });
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                }
            });
        };

        const initializeMap = async () => {
            const currentPosition = await getCurrentPosition();

            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [currentPosition.longitude, currentPosition.latitude],
                zoom: 9,
            });

            // Aggiungi un marker per la posizione corrente
            new mapboxgl.Marker()
                .setLngLat([currentPosition.longitude, currentPosition.latitude])
                .setPopup(new mapboxgl.Popup().setHTML("<h3>Estàs aqui</h3>"))
                .addTo(map);
        };

        initializeMap();
    }, []);




    return (
        <div className="map-container" style={{ height: "500px", width: "100%" }}>
            <div ref={mapContainer} style={{ height: "100%" }} />
        </div>
    );
}



