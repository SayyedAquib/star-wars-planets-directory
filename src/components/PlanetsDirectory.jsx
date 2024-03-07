import React from "react";
import usePlanetData from "../hooks/usePlanetData";
import PlanetCard from "./PlanetCard";
import Pagination from "./Pagination";
import Shimmer from "./Shimmer";

function PlanetsDirectory() {
  const {
    planets,
    loading,
    nextPageUrl,
    prevPageUrl,
    handleNextPage,
    handlePrevPage,
  } = usePlanetData();

  // Render shimmer effect if loading
  if (loading) {
    return (
      <div className="container">
        <h1>Star Wars Planets Directory</h1>
        <div className="shimmer">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Star Wars Planets Directory</h1>
      <div className="planets-list">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <Pagination
        nextPageUrl={nextPageUrl}
        prevPageUrl={prevPageUrl}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default PlanetsDirectory;
