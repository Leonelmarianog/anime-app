import React, { useState } from "react";
/* import useFetchOnChange from "../hooks/simple-fetch/useFetchOnChange.js"; */
/* import useFetchOnChange from "../hooks/fetch-with-reducer/useFetchOnChange.js"; */
import useFetchOnChange from "../hooks/fetch-with-cache/useFetchOnChange.js";
import SearchTab from "./SearchTab.jsx";
import CardList from "./CardList.jsx";
import jikanApi from "../js/api/api.js";
import { fromJSONToCardEntity } from "../js/mapper/mappers.js";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetchOnChange(
    jikanApi,
    searchTerm,
    fromJSONToCardEntity,
    500
  );
  return (
    <React.Fragment>
      <SearchTab value={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <h2>Loading...</h2>}
      {data && <CardList data={data} />}
      {error && <h2>{error.message}</h2>}
    </React.Fragment>
  );
};

export default Home;
