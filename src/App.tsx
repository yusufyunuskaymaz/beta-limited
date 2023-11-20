import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import {
  Add,
  Minus,
  Star1,
  Bag,
  Apple,
  ArrowDown2,
  ArrowUp2,
  ArrowRight2,
} from "iconsax-react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import { BadgeRoot } from "@mui/material/Badge";

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

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid
      container
      sx={{ mt: 5, bgcolor: "#F7F8FD", p: 3 }}
    >
      <Grid item xs={12} lg={3}>
        <Stack>
          <Card>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Top Categories
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <Apple />
                </ListItemIcon>
                <ListItemText primary="Diary and Eggs" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Bag />
                </ListItemIcon>
                <ListItemText primary="Breakfast" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Bag />
                </ListItemIcon>
                <ListItemText primary="Breakfast" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Bag />
                </ListItemIcon>
                <ListItemText primary="Breakfast" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Bag  />
                </ListItemIcon>
                <ListItemText primary="Breakfast" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Apple />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ArrowUp2 size="20" /> : <ArrowRight2 size="20" />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Bag />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Card>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Box>
          <Typography variant="h4" sx={{ ml: 3 }}>
            Pears, apples, quinces
          </Typography>
          <Stack
            spacing={3}
            direction={{ xs: "column", lg: "row" }}
            sx={{ mt: 1, mx: 3 }}
          >
            {data.map((item) => (
              <Stack flexGrow={1} key={item.id}>
                <Card sx={{ position: "relative",borderRadius:3 }}>
                  <Chip
                    sx={{ position: "absolute", top: 10, left: 10 }}
                    label={item.discount}
                    color="error"
                  />

                  <Stack
                    justifyContent="center"
                    sx={{ bgcolor: "#EEEEEE", height: "18rem" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ objectFit: "contain" }}
                      width="100"
                      image={item.image}
                      alt={item.name}
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
                          <Typography sx={{ color: "#C34A5A" }}>
                            $ {item.price}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#8F94A5",
                              textDecoration: "line-through",
                            }}
                          >
                            $ {item.originalPrice}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack alignItems="center" spacing={1}>
                        <IconButton
                          sx={{
                            borderRadius: 1,
                            border: 1,
                            borderColor: "#C34A5A",
                            p: "2px",
                          }}
                          aria-label="delete"
                        >
                          <Minus size="24" color="#C34A5A" />
                        </IconButton>
                        <Typography>5</Typography>
                        <IconButton
                          sx={{
                            borderRadius: 1,
                            border: 1,
                            borderColor: "#C34A5A",
                            p: "2px",
                          }}
                          aria-label="delete"
                        >
                          <Add size="24" color="#C34A5A" />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
