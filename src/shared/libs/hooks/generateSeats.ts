export type SeatStatus = "free" | "occupied" | "selected";

export interface Seat {
  id: string;
  row: number;
  number: number;
  status: SeatStatus;
}

export const generateSeats = (rows = 10, cols = 6): Seat[][] => {
  const seats: Seat[][] = [];
  for (let row = 0; row < rows; row++) {
    const rowSeats: Seat[] = [];
    for (let col = 0; col < cols; col++) {
      const seatId = `${String.fromCharCode(65 + row)}${col + 1}`;

      const status: SeatStatus = Math.random() < 0.3 ? "occupied" : "free";
      rowSeats.push({ id: seatId, row, number: col + 1, status });
    }
    seats.push(rowSeats);
  }
  return seats;
};
