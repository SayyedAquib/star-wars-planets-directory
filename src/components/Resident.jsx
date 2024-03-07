import useResidentData from "../hooks/useResidentData";
import Shimmer from "./Shimmer";

function Resident({ residentUrl }) {
  const residentData = useResidentData(residentUrl);

  if (!residentData) {
    return (
      <div className="resident-container loading">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="resident-container">
      <p>
        <strong>Name:</strong> {residentData.name}
      </p>
      <p>
        <strong>Height:</strong> {residentData.height}
      </p>
      <p>
        <strong>Mass:</strong> {residentData.mass}
      </p>
      <p>
        <strong>Gender:</strong> {residentData.gender}
      </p>
    </div>
  );
}

export default Resident;
