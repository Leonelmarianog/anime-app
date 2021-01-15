import React, { useEffect, useReducer, createContext } from 'react';

const initialValue = JSON.parse(localStorage.getItem('JIKAN_CACHE')) || {};

export const CacheContext = createContext();

const cacheReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CACHE':
      return { ...state, [payload.key]: payload.value };
    default:
      return state;
  }
};

export const CacheProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cacheReducer, initialValue);

  useEffect(() => {
    if (Object.keys(state).length !== 0) {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('JIKAN_CACHE', serializedState);
    }
  }, [state]);

  return <CacheContext.Provider value={{ state, dispatch }}>{children}</CacheContext.Provider>;
};
