import { useState, useEffect } from "react";
import { api } from "@/shared/api/API";
import { Flight } from "@/pages/flightsPage/model/flight.types";

export const useFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const response = await api.get<Flight[]>("/flights");
        setFlights(response.data);
      } catch (err) {
        console.error(err);
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return { flights, loading, error };
};
