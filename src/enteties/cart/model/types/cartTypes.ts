export interface CartItem {
  flightId: string;
  seatId: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
}
