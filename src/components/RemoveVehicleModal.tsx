import { useDispatch, useSelector } from "react-redux";

import { VehicleState } from "../types";
import { vehicleAction } from "../store/store";

export default function RemoveVehicleModal() {
  const startRemoveNewTask = useSelector(
    (state: VehicleState) => state.removeVehicle
  );
  const selectedVehicle = useSelector(
    (state: VehicleState) => state.selectedVehicle
  );
  const dispatch = useDispatch();

  function handleRemoveVehicle() {
    if (selectedVehicle) {
      dispatch(vehicleAction.removeVehicle(selectedVehicle.vin));
      dispatch(vehicleAction.selectVehicle(null));
      dispatch(vehicleAction.showRemoveVehicleForm(false));
    }
  }

  function handleCancelSubmit() {
    dispatch(vehicleAction.showRemoveVehicleForm(false));
  }

  return (
    <dialog
      onClose={handleCancelSubmit}
      open={startRemoveNewTask}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto"
    >
      <p className="text-xl font-bold text-center mb-4">Remove Vehicle</p>
      <p className="text-xl font-bold text-center mb-4">
        selected vin: {selectedVehicle?.vin}
      </p>
      <form
        onSubmit={handleRemoveVehicle}
        style={{ width: "100%" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="col-span-2 mt-4 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleCancelSubmit}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Cancel
          </button>

          {selectedVehicle && (
            <button
              type="button"
              onClick={handleRemoveVehicle}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Remove Vehicle
            </button>
          )}
        </div>
      </form>
    </dialog>
  );
}
