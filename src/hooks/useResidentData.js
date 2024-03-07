import { useState, useEffect } from "react";

function useResidentData(residentUrl) {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await fetch(residentUrl);
        const data = await response.json();
        setResident(data);
      } catch (error) {
        console.error("Error fetching resident:", error);
      }
    };

    fetchResident();

    // Cleanup function
    return () => setResident(null);
  }, [residentUrl]);

  return resident;
}

export default useResidentData;
