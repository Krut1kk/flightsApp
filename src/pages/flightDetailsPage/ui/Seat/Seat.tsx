import { FC } from "react";
import styles from "./Seat.module.scss";
import { Seat as SeatType } from "@/shared/libs/hooks/generateSeats";

interface SeatProps {
  seat: SeatType;
  onSelect: (seatId: string) => void;
}

export const Seat: FC<SeatProps> = ({ seat, onSelect }) => {
  const handleClick = () => {
    if (seat.status === "free") {
      onSelect(seat.id);
    }
  };

  return (
    <div
      className={`${styles.Seat} ${styles[seat.status]}`}
      onClick={handleClick}
    >
      {seat.id}
    </div>
  );
};
