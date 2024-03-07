// PlanetCard.js
import React from "react";
import ResidentsList from "./ResidentsList";

function PlanetCard({ planet }) {
  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p className="planet-info">
        <strong>Climate:</strong> {planet.climate}
      </p>
      <p className="planet-info">
        <strong>Population:</strong> {planet.population}
      </p>
      <p className="planet-info">
        <strong>Terrain:</strong> {planet.terrain}
      </p>
      <ResidentsList residents={planet.residents} />
    </div>
  );
}

export default PlanetCard;
