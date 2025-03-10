import { FC, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import styles from "./FlightDetailsPage.module.scss";
import { useFlightDetails } from "@/shared/libs/hooks/useFlightDetails";
import { Seat } from "../Seat/Seat";
import { addItem } from "@/enteties/cart";
import {
  generateSeats,
  Seat as SeatType,
} from "@/shared/libs/hooks/generateSeats";
import { getCartRoute } from "@/shared/libs/constants/routes";

export const FlightDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { flight, loading, error } = useFlightDetails(id!);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [seats] = useState<SeatType[][]>(() => generateSeats());

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSelectSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) return;

    setSelectedSeats((prev) => [...prev, seatId]);

    if (flight) {
      dispatch(addItem({ flightId: flight.id, seatId, price: flight.price }));
    }
  };

  if (loading) {
    return (
      <Box className={styles.loadingContainer}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !flight) {
    return (
      <Box className={styles.errorContainer}>
        <Typography variant="h6" color="error">
          {error || "Рейс не найден"}
        </Typography>
      </Box>
    );
  }

  return (
    <div className={styles.FlightDetailsPage}>
      <Typography variant="h4" className={styles.title}>
        Детали рейса {flight.id}
      </Typography>
      <Typography variant="body1">
        {flight.airline} | {flight.from} → {flight.to}
      </Typography>
      <Typography variant="body2">
        Вылет: {flight.departureTime} | Прибытие: {flight.arrivalTime}
      </Typography>
      <Typography variant="body2">Цена: {flight.price}$</Typography>

      <Box mt={4}>
        <Typography variant="h5">Выберите места</Typography>
        <div className={styles.seatGrid}>
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.seatRow}>
              {row.map((seat) => (
                <Seat key={seat.id} seat={seat} onSelect={handleSelectSeat} />
              ))}
            </div>
          ))}
        </div>
      </Box>

      {selectedSeats.length > 0 && (
        <Box mt={2}>
          <Typography variant="h6">
            Вы выбрали места: {selectedSeats.join(", ")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(getCartRoute())}
          >
            Перейти в корзину
          </Button>
        </Box>
      )}
    </div>
  );
};
