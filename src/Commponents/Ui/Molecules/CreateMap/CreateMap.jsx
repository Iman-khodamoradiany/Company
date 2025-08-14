import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
function CreateMap({ click = false, items }) {
    const Clickhandler = () => {
        useMapEvents({
            click: (e) => {
                alert(`${e.latlng.lat}`)
            }
        })
        return null
    }
    const customicon = L.icon({
        iconUrl: '/public/iconMarker/Vector.png',
        iconSize: [40, 40],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    })
    const customicon2 = L.icon({
        iconUrl: '/public/iconMarker/RedMap2.png',
        iconSize: [60, 60],
        iconAnchor: [40, 34],
        popupAnchor: [0, -32]
    })

    return (
        <MapContainer zoom={15} center={items.length >= 1 ? [35.6892, 51.3890] : items.address} className="w-full h-full z-10 outline-none"
            zoomControl={false}>
            <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                attribution='&copy; <a href="https://frontendi.com" data-wpel-link="internal"> فرانت اندی </a> contributors' />
            {items.length >= 1 ? (
                items.map((item) => (
                    <Marker position={item.address} icon={customicon}>
                        <Popup>{item.number1}</Popup>
                    </Marker>
                ))
            ) :
                <Marker position={items.address} icon={customicon2}>
                    <Popup>{items.number1}</Popup>
                </Marker>
            }
            {click ? <Clickhandler /> : ''}
        </MapContainer>
    )
}

export default CreateMap;