import { useState, useEffect } from "react";
import { api } from "@/shared/api/API";
import { FlightDetails } from "@/pages/flightDetailsPage/model/flightDetails.types";

export const useFlightDetails = (id: string) => {
  const [flight, setFlight] = useState<FlightDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      setLoading(true);
      try {
        const response = await api.get<FlightDetails>(`/flights/${id}`);
        setFlight(response.data);
      } catch (err) {
        console.error(err);
        setError("Ошибка загрузки данных рейса");
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetails();
  }, [id]);

  return { flight, loading, error };
};
