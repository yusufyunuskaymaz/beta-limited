import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Cards from "./components/Cards";
import { useEffect,useState } from "react";
import axios from "axios";
const Home = () => {

  const [products,setProducts] = useState([])


  const createSession = async () => {
    const { data } = await axios.get(
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession"
    );
    sessionStorage.setItem("sessionId", data);
  };

  useEffect(() => {
    createSession();
  }, []);

  return (
    <>
      <Navbar setProducts={setProducts} />
      <Grid container sx={{ mt: 5, bgcolor: "#F7F8FD", p: 3 }}>
        <Grid item xs={12} lg={3}>
          <Category />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Cards products={products} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
