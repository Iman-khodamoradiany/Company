import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LinkPage from "../../Atom/LinkPage/LinkPage";

function ClickHandler({ onClick }) {
  useMapEvents({
    click: (e) => {
      onClick && onClick(e);
    }
  });
  return null;
}

function CreateMap({ click = false, items }) {
  // مقدار پیش‌فرض اگر items خالی باشه
  const defaultCenter = [35.6892, 51.3890];
  const isArray = Array.isArray(items);
  const hasItems = isArray && items.length > 0;

  // آیکون‌های دلخواه
  const customIcon = L.icon({
    iconUrl: '/iconMarker/Vector.png', // بدون /public
    iconSize: [30, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const customIcon2 = L.icon({
    iconUrl: '/iconMarker/RedMap2.png',
    iconSize: [60, 60],
    iconAnchor: [40, 34],
    popupAnchor: [0, -32]
  });

  return (
    <MapContainer
      zoom={15}
      center={hasItems ? items[0].address : (items?.address || defaultCenter)}
      className="w-full h-full z-10 outline-none"
      zoomControl={false}
    >
      <TileLayer
        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        attribution='&copy; <a href="https://frontendi.com">فرانت اندی</a> contributors'
      />

      {hasItems
        ? items.map((item, index) => (
            item?.address && (
              <Marker key={index} position={item.address} icon={customIcon}>
                <Popup>
                  <LinkPage To={`/RentHome/${item.id}`}>
                    {item.number1 || 'خانه'}
                  </LinkPage>
                </Popup>
              </Marker>
            )
          ))
        : (items?.address && (
            <Marker position={items.address} icon={customIcon2}>
              <Popup>{items.number1 || 'خانه'}</Popup>
            </Marker>
          ))
      }

      {click && <ClickHandler onClick={(e) => alert(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`)} />}
    </MapContainer>
  );
}

export default CreateMap;
