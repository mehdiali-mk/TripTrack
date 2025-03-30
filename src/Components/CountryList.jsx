import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Message from "./Message.jsx";
import { useCityContext } from "../Contexts/CityContext.jsx";

function CountryList() {
  const { cities, isLoading } = useCityContext();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map." />
    );

  const countries = cities.reduce((array, city) => {
    if (!array.map((element) => element.country).includes(city.country))
      return [...array, { country: city.country, emoji: city.emoji }];
    else return array;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
