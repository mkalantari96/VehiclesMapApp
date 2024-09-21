import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { VehicleState } from "../types";

const RestView = () => {
  const selectedVehicle = useSelector(
    (state: VehicleState) => state.selectedVehicle
  );
  const map = useMap();
  useEffect(() => {
    if (!selectedVehicle) {
      map.setView([53.55, 10], 10);
    }
  }, [selectedVehicle, map]);
  return null;
};

export default RestView;
