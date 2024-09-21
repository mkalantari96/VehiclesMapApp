import { useDispatch } from "react-redux";
import { vehicleAction } from "../store/store";
import NewTaskModal from "./NewTaskModal";
export default function AddButton() {
  const dispatch = useDispatch();
  function handleClickAdd() {
    dispatch(vehicleAction.showAddVehicleForm(true));
  }
  return (
    <>
      <button
        onClick={handleClickAdd}
        className=" w-full my-2 mx-[auto] md:mx-1 rounded-md bg-yellow-500 text-lg px-2 py-4 font-semibold hover:bg-yellow-400"
      >
        Add New Car
      </button>
      <NewTaskModal location={[0, 0]} />
    </>
  );
}
