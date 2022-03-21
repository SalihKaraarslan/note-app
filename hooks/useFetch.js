import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, token) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: { authorization: `Bearer ${token}` },
      });
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
export default useFetch;
