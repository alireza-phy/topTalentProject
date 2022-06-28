import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import List from "../features/List";
import SearchBar from "../features/SearchBar";
import Typography from "@mui/material/Typography";

const MostPopular = () => {
  const [bestRepos, setBestRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=stars&sort=stars&per_page=10&order=desc"
    )
      .then((response) => response.json())
      .then((data) => setBestRepos(data.items));
  }, []);

  
  const filterData = (query, bestRepos) => {
        if (query?.length < 3) {
      return bestRepos;
    } else {
      return bestRepos.filter((repo) => repo.name.toLowerCase().includes(query.toLowerCase()));
    }
  };

    const dataFiltered = filterData(searchQuery, bestRepos);


  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px",
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Most popular repositories in git hub
      </Typography>
      <SearchBar setSearchQuery={setSearchQuery} />
      <List repos={dataFiltered} />
    </Box>
  );
};

export default MostPopular;
