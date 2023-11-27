import { Box, Button, IconButton, InputBase, Stack } from "@mui/material";
import { SearchNormal1 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import { NavbarProps } from "../types/types";

const Search = (props: NavbarProps) => {
  const { setProducts } = props;

  const [searchInput, setSearchInput] = useState("");

  const debounceResult = useDebounce(searchInput, 1000);

  const searchItem = async (value: string) => {
    if (value.trim() !== "") {
      const URL = `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/search?name=${value}`;
      console.log(URL, "url");
      const { data } = await axios.get(URL);
      const getIds = data.map((item:any) => item.id);
      console.log(getIds,"idd");
      setProducts(getIds)
    }else{
        setProducts([])
    }
  };

  useEffect(() => {
    searchItem(searchInput);
  }, [debounceResult]);

  return (
    <Stack>
      <Box
        component="form"
        sx={{
          // p: "2px 0",
          display: { xs: "none", md: "flex" },
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
          onChange={(e) => setSearchInput(e.target.value)}
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
              textTransform: "none",
            }}
            onClick={() => searchItem(searchInput)}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Search;
