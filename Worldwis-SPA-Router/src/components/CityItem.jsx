import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { cityName, emoji, id , position} = city;
console.log(position);

  
    /* Using params / storing state in URL using the "id" */
        /* Using Query String / storing state in URL using the "position" */

  

  return (
    <li>
      {/* <span>{country.emoji}</span>
      <span>{country.country}</span> */}
      <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>{" "}
        <span className={styles.name}>{cityName}</span>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
