import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { AccessTime, EventBusy, CheckCircle, QueryBuilder } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[5],
  },
}));

const Bookings = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" gutterBottom>
        Bookings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <AccessTime fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>
                Pending Bookings
              </Typography>
              <Typography variant="h4">8</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <QueryBuilder fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>
                Ongoing Bookings
              </Typography>
              <Typography variant="h4">4</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <EventBusy fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>
                Canceled Bookings
              </Typography>
              <Typography variant="h4">2</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <CheckCircle fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>
                Completed Bookings
              </Typography>
              <Typography variant="h4">10</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Bookings;
