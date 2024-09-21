import { vehicleSlice, vehicleAction } from "./store";
import { Vehicle, VehicleState, filterInput } from "../types";

describe("vehicle reducer", () => {
  const initialState: VehicleState = {
    vehicles: [],
    selectedVehicle: null,
    filterdVehicle: null,
    addNewVehicle: false,
    removeVehicle: false,
    showFilterBox: false,
  };

  it("should handle initial state", () => {
    const actualInitialState = vehicleSlice.reducer(undefined, {
      type: "unknown",
    });

    // Check that all properties except 'vehicles' match
    const { vehicles, ...restActual } = actualInitialState;
    const { vehicles: _, ...restExpected } = initialState;

    expect(restActual).toEqual(restExpected);

    // Check that 'vehicles' is an array (but don't check its contents)
    expect(Array.isArray(vehicles)).toBe(true);
  });

  it("should handle selectVehicle", () => {
    const mockVehicle: Vehicle = {
      vin: "123",
      plate: "ABC123",
      charging: false,
      freeForRental: true,
      geoCoordinate: { latitude: 0, longitude: 0 },
      fuelLevel: 0,
      address: "",
      locationAlias: "",
      fuelType: "",
      buildSeries: "",
      globalVersion: 0,
      hardwareVersion: "",
      locationId: 0,
      primaryColor: "",
      secondaryColor: "",
    };
    const actual = vehicleSlice.reducer(
      initialState,
      vehicleAction.selectVehicle(mockVehicle)
    );
    expect(actual.selectedVehicle).toEqual(mockVehicle);
  });

  it("should handle addVehicle", () => {
    const mockVehicle: Vehicle = {
      vin: "123",
      plate: "ABC123",
      charging: false,
      freeForRental: true,
      geoCoordinate: { latitude: 0, longitude: 0 },
      fuelLevel: 0,
      address: "",
      locationAlias: "",
      fuelType: "",
      buildSeries: "",
      globalVersion: 0,
      hardwareVersion: "",
      locationId: 0,
      primaryColor: "",
      secondaryColor: "",
    };
    const actual = vehicleSlice.reducer(
      initialState,
      vehicleAction.addVehicle(mockVehicle)
    );
    expect(actual.vehicles).toContainEqual(mockVehicle);
  });

  it("should handle showAddVehicleForm", () => {
    const actual = vehicleSlice.reducer(
      initialState,
      vehicleAction.showAddVehicleForm(true)
    );
    expect(actual.addNewVehicle).toBe(true);
  });

  it("should handle showRemoveVehicleForm", () => {
    const actual = vehicleSlice.reducer(
      initialState,
      vehicleAction.showRemoveVehicleForm(true)
    );
    expect(actual.removeVehicle).toBe(true);
  });

  it("should handle removeVehicle", () => {
    const stateWithVehicles = {
      ...initialState,
      vehicles: [
        {
          vin: "123",
          plate: "ABC123",
          charging: false,
          freeForRental: true,
          geoCoordinate: { latitude: 0, longitude: 0 },
          fuelLevel: 0,
          address: "",
          locationAlias: "",
          fuelType: "",
          buildSeries: "",
          globalVersion: 0,
          hardwareVersion: "",
          locationId: 0,
          primaryColor: "",
          secondaryColor: "",
        },
        {
          vin: "456",
          plate: "DEF456",
          charging: true,
          freeForRental: false,
          geoCoordinate: { latitude: 0, longitude: 0 },
          fuelLevel: 0,
          address: "",
          locationAlias: "",
          fuelType: "",
          buildSeries: "",
          globalVersion: 0,
          hardwareVersion: "",
          locationId: 0,
          primaryColor: "",
          secondaryColor: "",
        },
      ],
    };
    const actual = vehicleSlice.reducer(
      stateWithVehicles,
      vehicleAction.removeVehicle("123")
    );
    expect(actual.vehicles).toHaveLength(1);
    expect(actual.vehicles[0].vin).toBe("456");
  });

  it("should handle showFilterFrom", () => {
    const actual = vehicleSlice.reducer(
      initialState,
      vehicleAction.showFilterFrom(true)
    );
    expect(actual.showFilterBox).toBe(true);
  });

  it("should handle filterVehicles", () => {
    const stateWithVehicles = {
      ...initialState,
      vehicles: [
        {
          vin: "123",
          plate: "ABC123",
          charging: false,
          freeForRental: true,
          geoCoordinate: { latitude: 0, longitude: 0 },
          fuelLevel: 0,
          address: "",
          locationAlias: "",
          fuelType: "",
          buildSeries: "",
          globalVersion: 0,
          hardwareVersion: "",
          locationId: 0,
          primaryColor: "",
          secondaryColor: "",
        },
        {
          vin: "456",
          plate: "DEF456",
          charging: true,
          freeForRental: false,
          geoCoordinate: { latitude: 0, longitude: 0 },
          fuelLevel: 0,
          address: "",
          locationAlias: "",
          fuelType: "",
          buildSeries: "",
          globalVersion: 0,
          hardwareVersion: "",
          locationId: 0,
          primaryColor: "",
          secondaryColor: "",
        },
        {
          vin: "789",
          plate: "GHI789",
          charging: false,
          freeForRental: true,
          geoCoordinate: { latitude: 0, longitude: 0 },
          fuelLevel: 0,
          address: "",
          locationAlias: "",
          fuelType: "",
          buildSeries: "",
          globalVersion: 0,
          hardwareVersion: "",
          locationId: 0,
          primaryColor: "",
          secondaryColor: "",
        },
      ],
    };
    const filterInput: filterInput = {
      vin: "12",
      plate: "",
      charging: false,
      freeForRental: true,
    };
    const actual = vehicleSlice.reducer(
      stateWithVehicles,
      vehicleAction.filterVehicles(filterInput)
    );
    expect(actual.filterdVehicle).toHaveLength(1);
    expect(actual.filterdVehicle![0].vin).toBe("123");
  });
});
