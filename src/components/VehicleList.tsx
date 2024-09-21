import { useDispatch, useSelector } from "react-redux";
import { Vehicle, VehicleState } from "../types";
import { vehicleAction } from "../store/store";

export default function VehicleList() {
  const vehicleState = useSelector((state: VehicleState) => state);
  const dispatch = useDispatch();

  let content: Vehicle[];
  if (vehicleState.filterdVehicle !== null && vehicleState.showFilterBox) {
    content = vehicleState.filterdVehicle;
  } else {
    content = vehicleState.vehicles;
  }

  function handleClickItem(vehicle: Vehicle) {
    if (vehicleState.selectedVehicle === vehicle) {
      dispatch(vehicleAction.selectVehicle(null));
    } else {
      dispatch(vehicleAction.selectVehicle(vehicle));
    }
  }

  return (
    <ul className="space-y-2 overflow-auto">
      {content.map((vehicle) => (
        <li
          key={vehicle.vin}
          className={`p-2 border rounded cursor-pointer hover:bg-gray-400 transition 
          ${
            vehicleState.selectedVehicle?.vin === vehicle.vin
              ? "bg-blue-100"
              : ""
          }`}
          onClick={() => handleClickItem(vehicle)}
        >
          <p className="font-bold">{vehicle.plate}</p>
          <p className="text-sm">{vehicle.address}</p>
        </li>
      ))}
    </ul>
  );
}
