import { useState, useEffect, createContext, useContext } from "react";

const CityContext = createContext();

const BASE_URL = "http://localhost:8088";

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        console.log(`${BASE_URL}/cities`);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (err) {
        alert("Error while fetching data: ", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch (err) {
      throw new Error("Error while fetching city by id: ", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCityContext() {
  if (useContext(CityContext) === undefined)
    throw new Error("City Context is out of scope.");
  return useContext(CityContext);
}

export { CityProvider, useCityContext };
