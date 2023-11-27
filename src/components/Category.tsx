import React, { useState } from "react";
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Card
  } from "@mui/material";
  import { Stack } from "@mui/system";
  import { Apple, ArrowRight2, ArrowUp2, Bag } from "iconsax-react";
  
  const Category = () => {
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <Stack sx={{display:{xs:"none",lg:"flex"}}}>
        <Card>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Categories
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Apple variant="Bulk" />
              </ListItemIcon>
              <ListItemText primary="Diary and Eggs" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Bag variant="Bulk" />
              </ListItemIcon>
              <ListItemText primary="Breads" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Bag variant="Bulk" />
              </ListItemIcon>
              <ListItemText primary="Oils" />
            </ListItemButton>
            
            
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Apple variant="Bulk" />
              </ListItemIcon>
              <ListItemText primary="Fruits" />
              {open ? <ArrowUp2 size="20" /> : <ArrowRight2 size="20" />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Bag variant="Bulk" />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Card>
      </Stack>
    );
  };
  
  export default Category;
  