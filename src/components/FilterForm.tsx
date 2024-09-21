import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { VehicleState, filterInput } from "../types";
import { vehicleAction } from "../store/store";

export default function FilterForm() {
  const filterBoxshow = useSelector(
    (state: VehicleState) => state.showFilterBox
  );
  const dispatch = useDispatch();

  function handleAddNewTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const newFilter: filterInput = {
      vin: fd.get("vin") as string | null,
      plate: fd.get("plate") as string | null,
      charging: (fd.get("charging") === "true") as boolean | null,
      freeForRental: (fd.get("freeForRental") === "true") as boolean | null,
    };

    dispatch(vehicleAction.filterVehicles(newFilter)); // Dispatch the filter action
  }

  function handleCancelSubmit() {
    dispatch(vehicleAction.showFilterFrom(false));
  }

  return (
    <form
      hidden={filterBoxshow}
      onSubmit={handleAddNewTask}
      style={{ width: "100%" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-sm bg-slate-100 p-2 "
    >
      <div>
        <label
          htmlFor="vin"
          className="block text-sm font-medium text-gray-700"
        >
          VIN
        </label>
        <input
          name="vin"
          id="vin"
          type="text"
          placeholder="VIN"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="plate"
          className="block text-sm font-medium text-gray-700"
        >
          Plate
        </label>
        <input
          name="plate"
          id="plate"
          type="text"
          placeholder="Plate"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="charging"
          className="block text-sm font-medium text-gray-700"
        >
          Charging
        </label>
        <select
          name="charging"
          id="charging"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="freeForRental"
          className="block text-sm font-medium text-gray-700"
        >
          Free for Rental
        </label>
        <select
          name="freeForRental"
          id="freeForRental"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="col-span-2 mt-4 flex justify-center gap-4">
        <button
          type="button"
          onClick={handleCancelSubmit}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
}
