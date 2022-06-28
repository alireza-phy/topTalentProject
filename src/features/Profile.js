import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Profile = ({ userData }) => {
  console.log(userData);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="user profile"
        src={userData.avatar_url}
        sx={{ width: 200, mb: 8, height: 200 }}
      />
      
      <Typography color="blue" variant="h5" component="div" gutterBottom>
        {userData.name}
      </Typography>
      <Typography variant="Body2" component="div" gutterBottom>
        Public repo: {userData.public_repos}
      </Typography>
      <Link href={userData.html_url}>
        <Typography color="gray" variant="Body1" component="div" gutterBottom>
          {userData.html_url}
        </Typography>
      </Link>
    </Box>
  );
};

export default Profile;
