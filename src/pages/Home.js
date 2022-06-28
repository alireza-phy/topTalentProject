import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  

  let navigate = useNavigate();
  const [accountName, setName] = useState("");
  

  console.log(accountName);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px",
      }}
    >
      <Typography variant="h2" component="div" gutterBottom>
        Welcome to my app.
      </Typography>
      <Typography color="gray" variant="h4" component="div" gutterBottom>
        in this app, you can see the list of repos created by a gitHub account.
      </Typography>

      <Typography align="center" variant="h6" component="div" gutterBottom>
        please enter the name of gitHub account in the box and click the search
        button. you can also type the name in the address bar and push the enter
        key.
      </Typography>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setName(e.target.value);
          }}
          label="Enter a repo name"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          onClick={() =>   {fetch(`https://api.github.com/users/${accountName}`)
          .then((response) => (response.status === 200) ? response.json() : alert("there is no gitHub account with this name. try again!") )
          .then((data) => (data) ? navigate(`/${accountName}`, { state: { userData: data } }) : null)}}
          aria-label="fingerprint"
          color="secondary"
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </Box>
  );
};

export default Home;
