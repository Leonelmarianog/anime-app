import React, { useState } from "react";
/* import useFetchOnChange from "../hooks/simple-fetch/useFetchOnChange.js"; */
/* import useFetchOnChange from "../hooks/fetch-with-reducer/useFetchOnChange.js"; */
import useFetchOnChange from "../hooks/fetch-with-cache/useFetchOnChange.js";
import SearchTab from "./SearchTab.jsx";
import CardList from "./CardList.jsx";
import getData from "../helpers/api.js";
import fromJSONToEntity from "../helpers/fromJSONToEntity.js";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetchOnChange(
    getData,
    searchTerm,
    fromJSONToEntity,
    500
  );

  return (
    <React.Fragment>
      <SearchTab value={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <h2>Loading...</h2>}
      {data && <CardList data={data} />}
      {error && <h2>{error}</h2>}
    </React.Fragment>
  );
};

export default Home;
