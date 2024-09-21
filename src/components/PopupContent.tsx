import { Vehicle } from "../types";

interface VehicleTableProps {
  vehicle: Vehicle;
}

const PopupContent: React.FC<VehicleTableProps> = ({ vehicle }) => {
  const vehicleEntries = Object.entries(vehicle);

  return (
    <table
      border={1}
      cellPadding="10"
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {vehicleEntries.map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>
              {typeof value === "object"
                ? JSON.stringify(value)
                : value.toString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PopupContent;
