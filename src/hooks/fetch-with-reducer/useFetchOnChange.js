import { useEffect, useReducer } from "react";

const initialState = { data: null, loading: false, error: null };

/**
 * @param {Object} state
 * @param {Object} action
 */
const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOAD":
      return { ...state, data: null, loading: true, error: null };
    case "SUCCESS":
      return { ...state, data: payload, loading: false, error: null };
    case "FAILURE":
      return { ...state, data: null, loading: false, error: payload };
    case "CLEAN":
      return { ...state, data: null, loading: false, error: null };
    default:
      return state;
  }
};

/**
 * @param {Function} dataFetcher
 * @param {String} searchQuery
 * @param {Function} mapper
 * @param {Number} timeout
 */
const useFetchOnChange = (dataFetcher, searchQuery, mapper, timeout) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (searchQuery) {
        dispatch({ type: "LOAD" });

        try {
          const data = await dataFetcher(searchQuery, fetch);
          const results = data.map((item) => mapper(item));
          dispatch({ type: "SUCCESS", payload: results });
        } catch (error) {
          dispatch({ type: "FAILURE", payload: error });
        }
      } else {
        dispatch({ type: "CLEAN" });
      }
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [dataFetcher, searchQuery, mapper, timeout]);

  return state;
};

export default useFetchOnChange;
