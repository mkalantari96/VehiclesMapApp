export interface GeoCoordinate {
  latitude: number;
  longitude: number;
}

export interface Vehicle {
  vin: string;
  plate: string;
  geoCoordinate: GeoCoordinate;
  fuelLevel: number;
  address: string;
  locationAlias: string;
  locationId: number;
  buildSeries: string;
  fuelType: string;
  primaryColor: string;
  secondaryColor: string;
  charging: boolean;
  freeForRental: boolean;
  hardwareVersion: string;
  globalVersion: number;
}
export interface VehicleState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  filterdVehicle: Vehicle[] | null;
  addNewVehicle: boolean;
  removeVehicle: boolean;
  showFilterBox: boolean;
}

export interface filterInput {
  vin: string | null;
  plate: string | null;
  charging: boolean | null;
  freeForRental: boolean | null;
}
