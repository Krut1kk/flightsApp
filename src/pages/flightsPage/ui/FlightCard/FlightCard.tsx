// src/pages/flightsPage/ui/FlightCard.tsx
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FlightCard.module.scss";

import { Flight } from "../../model/flight.types";
import { getFlightDetailsRoute } from "@/shared/libs/constants/routes";

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard: FC<FlightCardProps> = ({ flight }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getFlightDetailsRoute(flight.id));
  };

  return (
    <div className={styles.FlightCard} onClick={handleClick}>
      <h3 className={styles.flightTitle}>Рейс {flight.id}</h3>
      <p className={styles.airline}>{flight.airline}</p>
      <p className={styles.route}>
        {flight.from} → {flight.to}
      </p>
      <p className={styles.times}>
        Вылет: {flight.departureTime} | Прибытие: {flight.arrivalTime}
      </p>
      <p className={styles.price}>Цена: {flight.price}$</p>
      <p className={styles.terminals}>
        Терминал: {flight.terminal} | Ворота: {flight.gate}
      </p>
      <p className={styles.seats}>
        Мест: {flight.remainingSeats}/{flight.totalSeats}
      </p>
    </div>
  );
};
