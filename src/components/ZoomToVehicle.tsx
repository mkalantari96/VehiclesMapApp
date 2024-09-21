import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { VehicleState } from "../types";

const ZoomToVehicle = () => {
  const selectedVehicle = useSelector(
    (state: VehicleState) => state.selectedVehicle
  );
  const map = useMap();
  useEffect(() => {
    if (selectedVehicle) {
      map.setView(
        [
          selectedVehicle.geoCoordinate.latitude,
          selectedVehicle.geoCoordinate.longitude,
        ],
        14
      );
    }
  }, [selectedVehicle, map]);
  return null;
};

export default ZoomToVehicle;
