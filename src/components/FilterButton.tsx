import { useDispatch, useSelector } from "react-redux";
import { vehicleAction } from "../store/store";
import { VehicleState } from "../types";
import FilterForm from "./FilterForm";

export default function FilterButton() {
  const filterShowState = useSelector(
    (state: VehicleState) => state.showFilterBox
  );
  const dispatch = useDispatch();
  function handleClickFilter() {
    dispatch(vehicleAction.showFilterFrom(true));
  }

  return (
    <div className="mb-6 flex md:flex-col flex-row w-full">
      {!filterShowState && (
        <button
          onClick={handleClickFilter}
          className=" w-full my-2 mx-[auto] rounded-md bg-blue-100 text-lg px-2 py-4 font-semibold hover:bg-blue-50"
        >
          Add Filter
        </button>
      )}
      {filterShowState && <FilterForm />}
    </div>
  );
}
