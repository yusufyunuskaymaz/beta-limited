import { Badge, Button, Popover, Typography } from "@mui/material";
import { Bag2 } from "iconsax-react";
import React from "react";
import { IBasket } from "../types/types";
import {useSelector} from "react-redux"

const Basket = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const {basketList} = useSelector((state:IBasket) => state.basket);

 const basketCount = basketList.reduce((sum,object)=>sum + object.count,0)

  return (
    <>
      <Badge badgeContent={basketCount === 0 ? "" : basketCount} color="primary" onClick={handleClick}>
        <Bag2 size="24" color="#C34A5A" variant="Bulk" />
      </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ mt: 2 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
};

export default Basket;
