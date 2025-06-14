import React, { useState } from "react";
import Countries from "../components/Countries";
import styles from "./Home.module.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text"  placeholder="Search for countries" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
      </div>
      <div className={styles.countriesWrapper}>
        <Countries searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default Home;
