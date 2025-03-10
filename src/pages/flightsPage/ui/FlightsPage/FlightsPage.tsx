// src/pages/flightsPage/ui/FlightsPage.tsx
import { FC } from "react";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import styles from "./FlightsPage.module.scss";
import { FlightCard } from "../FlightCard/FlightCard";
import { useFlights } from "@/shared/libs/hooks/useFlights";

interface FlightsPageProps {}

export const FlightsPage: FC<FlightsPageProps> = () => {
  const { flights, loading, error } = useFlights();

  if (loading) {
    return (
      <Box className={styles.loadingContainer}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className={styles.errorContainer}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div className={styles.FlightsPage}>
      <Grid container spacing={2}>
        {flights.map((flight) => (
          <Grid item xs={12} sm={6} md={4} key={flight.id}>
            <FlightCard flight={flight} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
