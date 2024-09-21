import "./App.css";
import { Provider, useDispatch } from "react-redux";
import { Store, vehicleAction } from "./store/store";
import VehicleList from "./components/VehicleList";
import { ShowMap } from "./components/ShowMap";
import AddButton from "./components/AddButton";
import FilterButton from "./components/FilterButton";

function App() {
  return (
    <Provider store={Store}>
      <div className="flex flex-col md:flex-row h-[90vh] mx-[auto] w-[90%] my-10 shadow rounded-md bg-slate-200">
        <section className="md:w-1/3 w-full h-1/2 md:h-full p-4 bg-slate-300 overflow-auto">
          <AddButton />
          <FilterButton />
          <div className="bg-slate-100 px-2 py-4">
            <p className="text-center">Vehicles list</p>
            <VehicleList />
          </div>
        </section>
        <section className="md:w-2/3 w-full h-1/2 md:h-full overflow-y-auto p-4">
          <ShowMap />
        </section>
      </div>
    </Provider>
  );
}

export default App;
