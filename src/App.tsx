import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { Add, Minus, Star1 } from "iconsax-react";
import Chip from "@mui/material/Chip";

function App() {
  const [data, setData] = useState<any[]>([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products"
    );
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data");

  return (
    <Stack spacing={3} direction="row" sx={{ width: "70%", m: "auto", mt: 5 }}>
      {data.map((item) => (
        <Stack flexGrow={1} key={item.id}>
          <Card sx={{position:"relative",height:"50vh"}}>

          <Chip sx={{position:"absolute", top:10, left:5}} label={item.discount} color="error" />

            <Stack sx={{ bgcolor: "#EEEEEE" }}>
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="Paella dish"
              />
            </Stack>

            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={1}>
                  <Typography>{item.name}</Typography>
                  <Stack direction="row">
                    <Star1 size="20" color="#EFB746" variant="Bulk" />
                    <Star1 size="20" color="#EFB746" variant="Bulk" />
                    <Star1 size="20" color="#EFB746" variant="Bulk" />
                    <Star1 size="20" color="#EFB746" variant="Bulk" />
                    <Star1 size="20" color="#EFB746" variant="Bulk" />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={{color:"#C34A5A"}}>$ {item.price}</Typography>
                    <Typography sx={{color:"#8F94A5",textDecoration:"line-through"}}>$ {item.originalPrice}</Typography>
                  </Stack>
                </Stack>
                <Stack alignItems="center" spacing={1}>
                  <IconButton sx={{ borderRadius: 1,border:1,borderColor:"#C34A5A",p:"2px" }} aria-label="delete">
                    <Minus size="24" color="#C34A5A" />
                  </IconButton>
                  <Typography>5</Typography>
                  <IconButton sx={{ borderRadius: 1,border:1,borderColor:"#C34A5A",p:"2px" }} aria-label="delete">
                    <Add size="24" color="#C34A5A" />
                  </IconButton>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      ))}
    </Stack>
  );
}

export default App;
