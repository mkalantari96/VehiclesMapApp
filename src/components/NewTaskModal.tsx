import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { VehicleState, Vehicle } from "../types";
import { vehicleAction } from "../store/store";

export default function NewTaskModal({
  location,
}: {
  location: [number, number];
}) {
  const startAddNewTask = useSelector(
    (state: VehicleState) => state.addNewVehicle
  );
  const dispatch = useDispatch();

  function handleAddNewTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const newVehicle: Vehicle = {
      vin: fd.get("vin") as string,
      plate: fd.get("plate") as string,
      geoCoordinate: {
        latitude: parseFloat(fd.get("latitude") as string),
        longitude: parseFloat(fd.get("longitude") as string),
      },
      fuelLevel: parseFloat(fd.get("fuelLevel") as string),
      address: fd.get("address") as string,
      locationAlias: fd.get("locationAlias") as string,
      locationId: parseInt(fd.get("locationId") as string, 10),
      buildSeries: fd.get("buildSeries") as string,
      fuelType: fd.get("fuelType") as string,
      primaryColor: fd.get("primaryColor") as string,
      secondaryColor: fd.get("secondaryColor") as string,
      charging: fd.get("charging") === "true",
      freeForRental: fd.get("freeForRental") === "true",
      hardwareVersion: fd.get("hardwareVersion") as string,
      globalVersion: parseFloat(fd.get("globalVersion") as string),
    };

    dispatch(vehicleAction.addVehicle(newVehicle));
    dispatch(vehicleAction.selectVehicle(newVehicle));
    dispatch(vehicleAction.showAddVehicleForm(false));
  }

  function handleCancelSubmit() {
    dispatch(vehicleAction.showAddVehicleForm(false));
  }

  return (
    <dialog
      onClose={handleCancelSubmit}
      open={startAddNewTask}
      className="bg-green-100 shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto"
    >
      <p className="text-xl font-bold text-center mb-4">Submit New Vehicle</p>
      <form
        onSubmit={handleAddNewTask}
        style={{ width: "100%" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Column 1 */}
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
            required
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
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="latitude"
            className="block text-sm font-medium text-gray-700"
          >
            Latitude
          </label>
          <input
            name="latitude"
            id="latitude"
            type="number"
            placeholder="Latitude"
            required
            defaultValue={location[0]}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="longitude"
            className="block text-sm font-medium text-gray-700"
          >
            Longitude
          </label>
          <input
            name="longitude"
            id="longitude"
            type="number"
            placeholder="Longitude"
            required
            defaultValue={location[1]}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="fuelLevel"
            className="block text-sm font-medium text-gray-700"
          >
            Fuel Level
          </label>
          <input
            name="fuelLevel"
            id="fuelLevel"
            type="number"
            placeholder="Fuel Level"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            name="address"
            id="address"
            type="text"
            placeholder="Address"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Column 2 */}
        <div>
          <label
            htmlFor="locationAlias"
            className="block text-sm font-medium text-gray-700"
          >
            Location Alias
          </label>
          <input
            name="locationAlias"
            id="locationAlias"
            type="text"
            placeholder="Location Alias"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="locationId"
            className="block text-sm font-medium text-gray-700"
          >
            Location ID
          </label>
          <input
            name="locationId"
            id="locationId"
            type="number"
            placeholder="Location ID"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="buildSeries"
            className="block text-sm font-medium text-gray-700"
          >
            Build Series
          </label>
          <input
            name="buildSeries"
            id="buildSeries"
            type="text"
            placeholder="Build Series"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="fuelType"
            className="block text-sm font-medium text-gray-700"
          >
            Fuel Type
          </label>
          <input
            name="fuelType"
            id="fuelType"
            type="text"
            placeholder="Fuel Type"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="primaryColor"
            className="block text-sm font-medium text-gray-700"
          >
            Primary Color
          </label>
          <input
            name="primaryColor"
            id="primaryColor"
            type="text"
            placeholder="Primary Color"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="secondaryColor"
            className="block text-sm font-medium text-gray-700"
          >
            Secondary Color
          </label>
          <input
            name="secondaryColor"
            id="secondaryColor"
            type="text"
            placeholder="Secondary Color"
            required
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
            required
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
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="hardwareVersion"
            className="block text-sm font-medium text-gray-700"
          >
            Hardware Version
          </label>
          <input
            name="hardwareVersion"
            id="hardwareVersion"
            type="text"
            placeholder="Hardware Version"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="globalVersion"
            className="block text-sm font-medium text-gray-700"
          >
            Global Version
          </label>
          <input
            name="globalVersion"
            id="globalVersion"
            type="number"
            placeholder="Global Version"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
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
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
}
