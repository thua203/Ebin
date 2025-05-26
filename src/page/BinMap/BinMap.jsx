import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import trashicon from "../../assets/image/trash-can-icon.png"

const trashIcon = new L.Icon({
  iconUrl: trashicon, 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const trashBins = [
  { lat: 16.0678, lng: 108.2208, name: "Bin - Nguyễn Tất Thành" },
  { lat: 16.0595, lng: 108.2169, name: "Bin - Yên Khê 1" },
  { lat: 16.0651, lng: 108.2100, name: "Bin - Lý Thái Tông" },
  { lat: 16.0610, lng: 108.2050, name: "Bin - Ngô Quyền" },
];

export default function Bins() {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle("Bins Map");
  }, [setTitle]);

  return (
    <MapContainer
      center={[16.0600, 108.2100]}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
    >
      {/*Có màu*/}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {/*Không màu*/}
      {/* <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      /> */}
      {trashBins.map((bin, index) => (
        <Marker key={index} position={[bin.lat, bin.lng]} icon={trashIcon}>
          <Popup>{bin.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}