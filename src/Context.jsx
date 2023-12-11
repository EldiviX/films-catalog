import { createContext, useContext, useState } from 'react';

const ArrFilmsContext = createContext();

export const ArrFilmsProvider = ({ children }) => {
  const [arrFilms, setArrFilms] = useState([]);

  const setFilms = (films) => {
    setArrFilms(films);
  };

  return (
    <ArrFilmsContext.Provider value={{ arrFilms, setFilms }}>
      {children}
    </ArrFilmsContext.Provider>
  );
};

export const useArrFilms = () => {
  return useContext(ArrFilmsContext);
};
