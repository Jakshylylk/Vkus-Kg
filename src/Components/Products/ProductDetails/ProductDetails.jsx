import { Alert, Container, Grid, Typography, Button, Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../Context/PorductContextProvider";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import CurrencyRubleRoundedIcon from "@mui/icons-material/CurrencyRubleRounded";
import { AddShoppingCart } from "@mui/icons-material";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../../Context/CartContextProvider";
import { authContext } from "../../../Context/AuthContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productDetails, readOneProduct, deleteProduct } =
    useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  const { user } = useContext(authContext);

  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);
  return (
    <>
      <div className="details-container">
        {productDetails ? (
          <Container sx={{ paddingTop: "150px" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper }}>
                  <SwiperSlide>
                    <img src={productDetails.img1} alt="" />
                  </SwiperSlide>
                </Swiper>
                <Alert
                  variant="filled"
                  severity="success"
                  icon={<CurrencyRubleRoundedIcon />}
                  sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  {productDetails.price}
                </Alert>
              </Grid>
              <Grid item xs={7} sx={{ ml: "90px" }}>
                <Typography variant="h2">{productDetails.title}</Typography>
                <Typography variant="h5" sx={{ marginTop: "30px" }}>
                  {productDetails.description}
                </Typography>
                <Button
                  onClick={() => addProductToCart(productDetails)}
                  variant="contained"
                  color="success"
                  sx={{ mt: "30px" }}>
                  <AddShoppingCart />
                </Button>
                {user.email === "admin@gmail.com" ? (
                  <>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ width: "30%", mt: "30px", ml: "15px" }}
                      onClick={e => deleteProduct(id)}>
                      Удалить
                    </Button>
                    <Link to={`/edit/${productDetails.id}`}>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ width: "30%", mt: "30px", ml: "15px" }}>
                        Редактировать
                      </Button>
                    </Link>
                  </>
                ) : null}
              </Grid>
            </Grid>
          </Container>
        ) : null}
      </div>
    </>
  );
};

export default ProductDetails;
