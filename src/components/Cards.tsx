import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  ListItemButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { Add, Minus, Star1 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { AxiosConfig, ICardProps, IBasket, IProduct } from "../types/types";
import { useSelector, useDispatch } from "react-redux";
import { addBasket, deleteBasket } from "../redux/actions/actions";
import { config } from "process";
import { IMAGES } from "../mock/images";

const Cards = (props: ICardProps) => {
  const { products } = props;

  const productList = useRef([]);


  const [data, setData] = useState<IProduct[]>([]);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products"
    );
    const newData = data.map((item: any, index: number) => ({
      ...item,
      count: 0,
      image: IMAGES[index],
    }));
    setData(newData);
    productList.current = newData;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToBasketRequest = async (id: string) => {
    const sessionId = sessionStorage.getItem("sessionId");
    const config: AxiosConfig = {
      headers: {
        "Session-ID": sessionId,
      },
    };
    const URL = `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/add-to-cart?id=${+id}`;

    const res = await axios.post(URL, null, config);
  };

  const handleAddClick = (index: number) => {
    const newData = [...data];
    newData[index].count += 1;
    setData(newData);
    dispatch(addBasket(newData));
    addToBasketRequest(newData[index].id);
  };

  const handleRemoveClick = (index: number) => {
    const newData = [...data];
    newData[index].count = Math.max(0, newData[index].count - 1);
    setData(newData);
    dispatch(deleteBasket(newData[index].id));
  };

  useEffect(() => {
    if (products.length > 0) {
      setData(data.filter((item) => products.includes(item.id)));
    } else {
      setData(productList.current);
    }
  }, [products]);

  // repo name changed

  const theme = useTheme()

  return (
    <Box>
    
      <Typography variant="h4" sx={{ ml: { xs: 0, md: 3 } }}>
        Pears, apples, quinces
      </Typography>
      <Stack
        spacing={3}
        direction={{ xs: "column", lg: "row" }}
        sx={{ mt: 1, mx: { xs: 0, md: 3 } }}
      >
        {data.map((item, index) => (
          <Stack flexGrow={1} key={item.id}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                maxWidth: { xs: "100%", lg: "20rem" },
              }}
            >
              <Chip
                sx={{ position: "absolute", top: 10, left: 10 }}
                label={item.discount}
                color="primary"
              />

              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ bgcolor: "#EEEEEE", height: "18rem" }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: "cover",
                    maxWidth: "200px",
                    textAlign: "center",
                  }}
                  image={item.image}
                  alt={item.name}
                />
              </Stack>

              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                  sx={{ minHeight: "100px" }}
                >
                  <Stack spacing={1}>
                    <Typography>{item.name}</Typography>
                    <Stack direction="row">
                      <Star1 size="20" color={theme.palette.secondary.main} variant="Bulk" />
                      <Star1 size="20" color={theme.palette.secondary.main} variant="Bulk" />
                      <Star1 size="20" color={theme.palette.secondary.main} variant="Bulk" />
                      <Star1 size="20" color={theme.palette.secondary.main} variant="Bulk" />
                      <Star1 size="20" color={theme.palette.secondary.main} variant="Bulk" />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Typography sx={{ color: "primary.main" }}>
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
                    {item.count > 0 && (
                      <>
                        <ListItemButton
                          sx={{
                            borderRadius: 1,
                            border: 1,
                            borderColor: "primary.main",
                            p: "2px",
                          }}
                          aria-label="delete"
                          onClick={() => handleRemoveClick(index)}
                        >
                          <Minus size="24" color={theme.palette.primary.main} />
                        </ListItemButton>
                        <Typography>{item.count}</Typography>
                      </>
                    )}

                    <Box onClick={() => handleAddClick(index)}>
                      <ListItemButton
                        sx={{
                          borderRadius: 1,
                          border: 1,
                          borderColor: "primary.main",
                          p: "2px",
                        }}
                        aria-label="delete"
                      >
                        <Add size="24" color={theme.palette.primary.main} />
                      </ListItemButton>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Cards;
