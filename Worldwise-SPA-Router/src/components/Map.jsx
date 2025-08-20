import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  // useNAvigate
  const navigate = useNavigate();

  // reading lat & Lng data from URL
  const [SearchParams, setSearchParams] = useSearchParams();

  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        Positon : {lat}, {lng}{" "}
      </p>
    </div>
  );
};

export default Map;
