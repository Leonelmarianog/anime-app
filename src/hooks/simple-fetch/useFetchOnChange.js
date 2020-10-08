import { useState, useEffect } from "react";

/**
 * @param {Function} dataFetcher
 * @param {String} searchTerm
 * @param {Function} mapper
 * @param {Number} timeout
 */
const useFetchOnChange = (dataFetcher, searchTerm, mapper, timeout) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (searchTerm) {
        setLoading(true);
        setData(null);
        setError(null);

        try {
          const data = await dataFetcher(searchTerm, fetch);
          const results = data.map((item) => mapper(item));
          setData(results);
        } catch (error) {
          setError(error);
        }

        setLoading(false);
      } else {
        setData(null);
        setError(null);
      }
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [dataFetcher, searchTerm, mapper, timeout]);

  return { data, error, loading };
};

export default useFetchOnChange;
