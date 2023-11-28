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
  useTheme,
} from "@mui/material";
import { Bag2, ProfileCircle, SearchNormal1 } from "iconsax-react";
import Basket from "./Basket";
import Search from "./Search";
import { NavbarProps } from "../types/types";

const Navbar = (props:NavbarProps) => {
  const theme = useTheme()
  console.log(theme,"themee");
  const {setProducts} = props
  return (
    <Stack
      mx={{xs:1,md:5}}
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
      <Search setProducts={setProducts} />
      <Stack direction="row" spacing={2}>
        <IconButton>
          <Basket />
        </IconButton>
        <IconButton>
          <Badge>
            <ProfileCircle size="24" color={theme.palette.primary.main} variant="Bulk" />
          </Badge>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
