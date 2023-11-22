import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import {
  Badge,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { Bag2, ProfileCircle, SearchNormal1 } from "iconsax-react";
import Basket from "./Basket";

const Navbar = () => {
  return (
    <Stack
      mx={5}
      py={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        component="img"
        sx={{ width: 125, height: 35 }}
        src="https://beta.limited/assets/images/logo-dark.png"
      />
      <Stack>
        <Box
          component="form"
          sx={{
            // p: "2px 0",
            display: "flex",
            alignItems: "stretch",
            width: "30vw",
            border: "1px solid #8F94A5",
            borderRadius: 5,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchNormal1 size="18" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Searching for..."
            inputProps={{ "aria-label": "searcing for" }}
          />
          <Box
            sx={{
              bgcolor: "#C34A5A",
              borderRadius: 5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Button
              sx={{
                color: "white",
                px: 4,
                textTransform:"none"
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
        <IconButton>
      <Basket />
          
        </IconButton>
        <IconButton>
          <Badge >
            <ProfileCircle size="24" color="#C34A5A" />
          </Badge>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
