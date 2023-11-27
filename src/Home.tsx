import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Cards from "./components/Cards";
const Home = () => {
  return (
    <>
      <Navbar />
      <Grid container sx={{ mt: 5, bgcolor: "#F7F8FD", p: 3 }}>
        <Grid item xs={12} lg={3}>
          <Category />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Cards />
        </Grid>
      </Grid>
    </>
  )
}

export default Home