import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./store/store";
import AddButton from "./components/AddButton";
import FilterButton from "./components/FilterButton";
import { lazy, Suspense } from "react";
const ShowMap = lazy(() => import("./components/ShowMap"));
const VehicleList = lazy(() => import("./components/VehicleList"));
function App() {
  return (
    <Provider store={Store}>
      <div className="flex flex-col md:flex-row h-[90vh] mx-[auto] w-[90%] my-10 shadow rounded-md bg-slate-200">
        <section className="md:w-1/3 w-full h-1/2 md:h-full p-4 bg-slate-300 overflow-auto">
          <AddButton />
          <FilterButton />
          <div className="bg-slate-100 px-2 py-4">
            <p className="text-center">Vehicles list</p>
            <Suspense
              fallback={
                <div className="text-center">Loading Vehicle List...</div>
              }
            >
              <VehicleList />
            </Suspense>
          </div>
        </section>
        <section className="md:w-2/3 w-full h-1/2 md:h-full overflow-y-auto p-4">
          <Suspense
            fallback={<div className="text-center">Loading Map...</div>}
          >
            <ShowMap />
          </Suspense>
        </section>
      </div>
    </Provider>
  );
}

export default App;
