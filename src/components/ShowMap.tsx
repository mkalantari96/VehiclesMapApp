import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import iconImag from "../assets/locationTag.png";
import { useDispatch, useSelector } from "react-redux";
import { Vehicle, VehicleState } from "../types";
import PopupContent from "./PopUpContent";
import { vehicleAction } from "../store/store";
import ZoomToVehicle from "./ZoomToVehicle";
import RestView from "./RestVeiw";
import { useState } from "react";
import L from "leaflet";
import NewTaskModal from "./NewTaskModal";
import RemoveVehicleModal from "./RemoveVehicleModal";

const redIcon = new L.Icon({
  iconUrl: iconImag,

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export function ShowMap() {
  const [location, setLocation] = useState<[number, number] | null>(null);
  const vehicleState = useSelector((state: VehicleState) => state);
  const dispatch = useDispatch();
  let content: Vehicle[] =
    (vehicleState.showFilterBox && vehicleState.filterdVehicle) ||
    vehicleState.vehicles;

  function handleClickMarker(vehicle: Vehicle) {
    dispatch(vehicleAction.selectVehicle(vehicle));
  }

  function handleClickAdd() {
    dispatch(vehicleAction.showAddVehicleForm(true));
  }

  function handleClickRemove() {
    dispatch(vehicleAction.showRemoveVehicleForm(true));
  }

  const LocationSelector = () => {
    useMapEvents({
      click(e) {
        setLocation([e.latlng.lat, e.latlng.lng]);
        console.log(e.latlng);
      },
    });
    return null;
  };

  return (
    <>
      {!vehicleState.addNewVehicle && !vehicleState.removeVehicle && (
        <MapContainer center={[53.55, 10]} zoom={11} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {content.map((vehicle) => (
            <Marker
              key={vehicle.vin}
              position={[
                vehicle.geoCoordinate.latitude,
                vehicle.geoCoordinate.longitude,
              ]}
              eventHandlers={{ click: () => handleClickMarker(vehicle) }}
            >
              <Popup>
                <PopupContent vehicle={vehicle} />
                <button
                  className="mt-4 rounded-md bg-red-500 text-xs px-1 py-2 hover:bg-red-400"
                  onClick={handleClickRemove}
                >
                  Remove
                </button>
              </Popup>
            </Marker>
          ))}
          {location && !vehicleState.addNewVehicle && (
            <Marker position={location} icon={redIcon}>
              <Popup>
                <p>
                  You can add a new vehicle at this position.
                  <button
                    className="ml-4 rounded-md bg-yellow-500 text-xs px-1 py-2 hover:bg-yellow-400"
                    onClick={handleClickAdd}
                  >
                    Add
                  </button>
                </p>
              </Popup>
            </Marker>
          )}
          {vehicleState.selectedVehicle && <ZoomToVehicle />}
          {!vehicleState.selectedVehicle && <RestView />}
          <LocationSelector />
        </MapContainer>
      )}

      {location && vehicleState.addNewVehicle && (
        <NewTaskModal location={location} />
      )}
      {vehicleState.removeVehicle && vehicleState.selectedVehicle && (
        <RemoveVehicleModal />
      )}
    </>
  );
}
