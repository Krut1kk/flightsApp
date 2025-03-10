import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "./CartPage.module.scss";
import { StateSchema } from "@/app/config/store/StateSchema";
import { removeItem, clearCart } from "@/enteties/cart";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "@/enteties/cart/model/selectors/selectCart";

export const CartPage: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: StateSchema) => selectCartItems(state));
  const totalPrice = useSelector((state: StateSchema) =>
    selectCartTotalPrice(state)
  );

  const handleRemove = (flightId: string, seatId: string) => {
    dispatch(removeItem({ flightId, seatId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box className={styles.CartPage} p={2}>
      <Typography variant="h4" gutterBottom>
        Корзина
      </Typography>
      {items.length === 0 ? (
        <Typography variant="body1">Корзина пуста</Typography>
      ) : (
        <>
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Рейс: ${item.flightId}, Место: ${item.seatId}`}
                  secondary={`Цена: ${item.price}$`}
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemove(item.flightId, item.seatId)}
                >
                  Удалить
                </Button>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" mt={2}>
            Общая сумма: {totalPrice}$
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClearCart}
            sx={{ mt: 2 }}
          >
            Очистить корзину
          </Button>
        </>
      )}
    </Box>
  );
};
