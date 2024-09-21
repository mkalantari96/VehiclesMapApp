import { filterInput, Vehicle, VehicleState } from "../types";
import vehicleData from "../api/vehicles.json";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: VehicleState = {
  vehicles: vehicleData,
  selectedVehicle: null,
  filterdVehicle: null,
  addNewVehicle: false,
  removeVehicle: false,
  showFilterBox: false,
};

export const vehicleSlice = createSlice({
  name: "vehicleSlice",
  initialState,
  reducers: {
    selectVehicle(state, action: PayloadAction<Vehicle | null>) {
      state.selectedVehicle = action.payload;
    },
    addVehicle(state, action: PayloadAction<Vehicle>) {
      state.vehicles.push(action.payload);
    },
    showAddVehicleForm(state, action: PayloadAction<boolean>) {
      state.addNewVehicle = action.payload;
    },
    showRemoveVehicleForm(state, action: PayloadAction<boolean>) {
      state.removeVehicle = action.payload;
    },
    removeVehicle(state, action: PayloadAction<string>) {
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.vin !== action.payload
      );
      if (state.filterdVehicle !== null) {
        state.filterdVehicle = state.filterdVehicle.filter(
          (vehicle) => vehicle.vin !== action.payload
        );
      }
    },
    showFilterFrom(state, action: PayloadAction<boolean>) {
      state.showFilterBox = action.payload;
    },
    filterVehicles(state, action: PayloadAction<filterInput>) {
      const { vin, plate, charging, freeForRental } = action.payload;
      state.filterdVehicle = state.vehicles.filter((vehicle) => {
        return (
          (!vin || vehicle.vin.includes(vin)) &&
          (!plate || vehicle.plate.includes(plate)) &&
          (charging === null || vehicle.charging === charging) &&
          (freeForRental === null || vehicle.freeForRental === freeForRental)
        );
      });
    },
  },
});

export const Store = configureStore({ reducer: vehicleSlice.reducer });
export const vehicleAction = vehicleSlice.actions;
