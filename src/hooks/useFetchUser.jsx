import { useState, useEffect } from "react";

const useFetchUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, loading, error };
};

export default useFetchUser;
