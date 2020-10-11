import { useEffect, useReducer, useContext } from "react";
import { CacheContext } from "../../components/CacheContext.jsx";

const initialState = { data: null, loading: false, error: null };

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

const useFetchOnChange = (dataFetcher, searchTerm, mapper, timeout) => {
  const cache = useContext(CacheContext);
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (cache.state[searchTerm]) {
      dispatch({ type: "SUCCESS", payload: cache.state[searchTerm] });
      return;
    }

    const timerId = setTimeout(async () => {
      if (searchTerm) {
        dispatch({ type: "LOAD" });

        try {
          const data = await dataFetcher(searchTerm, fetch);
          const results = data.map((item) => mapper(item));
          dispatch({ type: "SUCCESS", payload: results });
          cache.dispatch({
            type: "SET_CACHE",
            payload: { key: searchTerm, value: results },
          });
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
  }, [dataFetcher, searchTerm, mapper, timeout, cache]);

  return state;
};

export default useFetchOnChange;
