import { Badge, Box, Button, Popover, Stack, Typography } from "@mui/material";
import { Bag2 } from "iconsax-react";
import React, { useEffect } from "react";
import { IBasket } from "../types/types";
import { useSelector } from "react-redux";

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

  const { basketList } = useSelector((state: IBasket) => state.basket);

  const basketCount = basketList.reduce((sum, object) => sum + object.count, 0);

  const basket = basketList.filter((item) => item.count > 0);

  return (
    <>
      <Badge
        badgeContent={basketCount === 0 ? 0 : basketCount}
        color="primary"
        onClick={handleClick}
      >
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
        {basketCount === 0 && (
          <Stack p={2}>
            <Typography variant="body2">There is nothing at basket</Typography>
          </Stack>
        )}
        {basket.map((item) => (
          <Stack p={2} direction="row" spacing={2} alignItems="center" key={item.id}>
            <Box src={item.image} sx={{ width: "2rem" }} component="img" />
            <Typography variant="body2">{item.name} X {item.count}</Typography>
          </Stack>
        ))}
      </Popover>
    </>
  );
};

export default Basket;
