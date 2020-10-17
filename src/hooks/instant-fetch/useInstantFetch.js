import { useContext, useReducer, useEffect } from "react";
import { CacheContext } from "../../components/CacheProvider.jsx";

const initialState = { data: null, loading: false, error: false };

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

const useInstantFetch = (animeApi, animeId, mapper) => {
  const cache = useContext(CacheContext);
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (cache.state[animeId]) {
      dispatch({ type: "SUCCESS", payload: cache.state[animeId] });
      return;
    }

    const fetch = async () => {
      dispatch({ type: "LOAD" });

      try {
        const data = await animeApi.getAnimeById(animeId);
        const result = mapper(data);
        dispatch({ type: "SUCCESS", payload: result });
        cache.dispatch({
          type: "SET_CACHE",
          payload: { key: animeId, value: result },
        });
      } catch (error) {
        dispatch({ type: "FAILURE", payload: error });
      }
    };

    fetch();
  }, [animeApi, animeId, mapper, cache]);

  return state;
};

export default useInstantFetch;
