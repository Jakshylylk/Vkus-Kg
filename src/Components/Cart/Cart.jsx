import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Context/CartContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Cart.css";

const Cart = () => {
  const { productInCart, getCart, changeProductCount, deleteProductInCart } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <div className="cart-container">
        <Container maxWidth="lg">
          <Typography
            component={Paper}
            variant="h4"
            sx={{
              width: "40%",
              padding: "10px",
              textAlign: "center",
              margin: "0px auto",
            }}>
            Ваша корзина покупок
          </Typography>
          {productInCart ? (
            <>
              <TableContainer component={Paper}>
                <Table
                  sx={{
                    maxWidth: 1100,
                  }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Продукт
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Наименования
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Цена
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Количество
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Итого
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Удалить
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productInCart.products.map(elem => (
                      <TableRow>
                        <TableCell>
                          <img
                            style={{ width: "100px" }}
                            src={elem.item.img1}
                          />
                        </TableCell>
                        <TableCell> {elem.item.title} </TableCell>
                        <TableCell> {elem.item.price} </TableCell>
                        <TableCell>
                          <input
                            type="number"
                            min="1"
                            value={elem.count}
                            style={{ width: "40px" }}
                            onChange={e =>
                              changeProductCount(elem.item.id, e.target.value)
                            }
                          />
                        </TableCell>
                        <TableCell>{elem.subPrice}</TableCell>
                        <TableCell
                          onClick={() => deleteProductInCart(elem.item.id)}
                          className="deleteIconBasket">
                          <DeleteForeverIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" sx={{ margin: "20px auto" }}>
                Всего: {productInCart.totalPrice}
              </Button>
            </>
          ) : null}
        </Container>
      </div>
    </>
  );
};

export default Cart;
