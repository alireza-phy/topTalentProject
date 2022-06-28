import React, { useState } from "react";
import { useParams , useLocation} from "react-router-dom";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "../features/List";
import Profile from "../features/Profile";

const UserProfile = () => {
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const location = useLocation()

  console.log(params);
  let data = (location?.state?.userData)
  useEffect(() => {
    (data) ? setUserData(data) :
    fetch(`https://api.github.com/users/${params.username}`)
      .then((response) =>response.json())
      .then((data) => setUserData(data));
  }, [params.username]);

console.log((location?.state?.userData))

  useEffect(() => {
    fetch(`https://api.github.com/users/${params.username}/repos`)
      .then((response) => response.json())
      .then((data) => setUserRepos(data));
  }, [params.username]);

  console.log(userData);
  console.log(userRepos);

  return (
    <Box
      style={{
        display: "flex",
        gap: "48px",
        justifyContent: "center",
        alignItems: "center",
        padding:"48px"
      }}
    >
            <Profile userData={userData} />
      <List repos={userRepos} />
    </Box>
  );
};

export default UserProfile;
