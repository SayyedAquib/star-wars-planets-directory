import React from "react";
import Resident from "./Resident";

function ResidentsList({ residents }) {
  return (
    <div>
      <h3>Residents:</h3>
      <ul className="residents-list">
        {residents && residents.length > 0 ? (
          residents.map((residentUrl) => (
            <li key={residentUrl}>
              <Resident residentUrl={residentUrl} />
            </li>
          ))
        ) : (
          <li>No residents available</li>
        )}
      </ul>
    </div>
  );
}

export default ResidentsList;
