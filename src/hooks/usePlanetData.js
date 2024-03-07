import { useState, useEffect } from "react";

function usePlanetData() {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://swapi.dev/api/planets/?format=json";

  useEffect(() => {
    fetchPlanets(apiUrl);
  }, []);

  const fetchPlanets = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching planets:", error);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchPlanets(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      fetchPlanets(prevPageUrl);
    }
  };

  return {
    planets,
    loading,
    nextPageUrl,
    prevPageUrl,
    handleNextPage,
    handlePrevPage,
  };
}

export default usePlanetData;
