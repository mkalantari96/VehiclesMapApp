import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import NewVehicleModal from "./NewVehicleModal";
import { vehicleAction, vehicleSlice } from "../store/store";

const store = configureStore({ reducer: vehicleSlice.reducer });

describe("NewVehicleModal", () => {
  beforeEach(() => {
    store.dispatch(vehicleAction.showAddVehicleForm(true));
  });

  it("should render the modal correctly", () => {
    render(
      <Provider store={store}>
        <NewVehicleModal location={[52.5, 13.4]} />
      </Provider>
    );

    expect(screen.getByText(/submit new vehicle/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("VIN")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Latitude")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Longitude")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it("should update form state on user input", () => {
    render(
      <Provider store={store}>
        <NewVehicleModal location={[52.5, 13.4]} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("VIN"), {
      target: { value: "1234" },
    });
    fireEvent.change(screen.getByPlaceholderText("Plate"), {
      target: { value: "XYZ-123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Latitude"), {
      target: { value: 52.5 },
    });
    fireEvent.change(screen.getByPlaceholderText("Longitude"), {
      target: { value: 13.4 },
    });
    fireEvent.change(screen.getByPlaceholderText("Fuel Level"), {
      target: { value: 75 },
    });
    fireEvent.change(screen.getByPlaceholderText("Address"), {
      target: { value: "ABCDED TEHRAn" },
    });
    fireEvent.change(screen.getByPlaceholderText("Location Alias"), {
      target: { value: "ABC" },
    });
    fireEvent.change(screen.getByPlaceholderText("Location ID"), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByPlaceholderText("Build Series"), {
      target: { value: "first" },
    });
    fireEvent.change(screen.getByPlaceholderText("Fuel Type"), {
      target: { value: "gas" },
    });
    fireEvent.change(screen.getByPlaceholderText("Primary Color"), {
      target: { value: "red" },
    });
    fireEvent.change(screen.getByPlaceholderText("Secondary Color"), {
      target: { value: "blue" },
    });
    fireEvent.change(screen.getByPlaceholderText("Hardware Version"), {
      target: { value: "first version" },
    });
    fireEvent.change(screen.getByPlaceholderText("Global Version"), {
      target: { value: 3 },
    });

    expect(screen.getByPlaceholderText("VIN")).toHaveValue("1234");
    expect(screen.getByPlaceholderText("Latitude")).toHaveValue(52.5);
    expect(screen.getByPlaceholderText("Longitude")).toHaveValue(13.4);
    expect(screen.getByPlaceholderText("Plate")).toHaveValue("XYZ-123");
    expect(screen.getByPlaceholderText("Fuel Level")).toHaveValue(75);
  });

  it("should dispatch addVehicle action when the form is submitted", () => {
    const mockDispatch = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <NewVehicleModal location={[52.5, 13.4]} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("VIN"), {
      target: { value: "1234" },
    });
    fireEvent.change(screen.getByPlaceholderText("Plate"), {
      target: { value: "XYZ-123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Latitude"), {
      target: { value: 52.5 },
    });
    fireEvent.change(screen.getByPlaceholderText("Longitude"), {
      target: { value: 13.4 },
    });
    fireEvent.change(screen.getByPlaceholderText("Fuel Level"), {
      target: { value: 75 },
    });
    fireEvent.change(screen.getByPlaceholderText("Address"), {
      target: { value: "ABCDED TEHRAn" },
    });
    fireEvent.change(screen.getByPlaceholderText("Location Alias"), {
      target: { value: "ABC" },
    });
    fireEvent.change(screen.getByPlaceholderText("Location ID"), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByPlaceholderText("Build Series"), {
      target: { value: "first" },
    });
    fireEvent.change(screen.getByPlaceholderText("Fuel Type"), {
      target: { value: "gas" },
    });
    fireEvent.change(screen.getByPlaceholderText("Primary Color"), {
      target: { value: "red" },
    });
    fireEvent.change(screen.getByPlaceholderText("Secondary Color"), {
      target: { value: "blue" },
    });
    fireEvent.change(screen.getByPlaceholderText("Hardware Version"), {
      target: { value: "first version" },
    });
    fireEvent.change(screen.getByPlaceholderText("Global Version"), {
      target: { value: 3 },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: expect.stringContaining("addVehicle"),
        payload: expect.objectContaining({
          vin: "1234",
          geoCoordinate: { latitude: 52.5, longitude: 13.4 },
        }),
      })
    );
  });

  it("should close the modal when the cancel button is clicked", () => {
    render(
      <Provider store={store}>
        <NewVehicleModal location={[52.5, 13.4]} />
      </Provider>
    );

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(store.getState().addNewVehicle).toBe(false);
  });
});
