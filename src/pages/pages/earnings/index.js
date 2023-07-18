import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { styled } from '@mui/system';
import { AttachMoney, BusinessCenter, HelpOutline } from '@mui/icons-material';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[5],
  },
  height: '100%',
}));

const Earnings = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Net Income
                </Typography>
                <Typography variant="h4" color="primary">
                  $10,000
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={2}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Withdrawn
                </Typography>
                <Typography variant="h4" color="primary">
                  $5,000
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={2}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Used for Purchases
                </Typography>
                <Typography variant="h4" color="primary">
                  $2,000
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={2}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Pending Clearance
                </Typography>
                <Typography variant="h4" color="primary">
                  $1,500
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={2}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Available for Withdrawal
                </Typography>
                <Typography variant="h4" color="primary">
                  $1,000
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Withdraw
          </Typography>
          <Button
            variant="contained"
            startIcon={<AttachMoney />}
            sx={{ mr: 1, mb: 1, textTransform: 'none', backgroundColor: '#0091EA' }}
          >
            PayPal Account
          </Button>
          <Button
            variant="contained"
            startIcon={<BusinessCenter />}
            sx={{ mr: 1, mb: 1, textTransform: 'none', backgroundColor: '#8BC34A' }}
          >
            Bank Transfer
          </Button>
          <Button
            variant="contained"
            startIcon={<HelpOutline />}
            sx={{ mr: 1, mb: 1, textTransform: 'none', backgroundColor: '#FBC02D' }}
          >
            Revenue Card
          </Button>
        </Box>
        <Box mt={3}>
          <Typography variant="h6" color="primary" gutterBottom>
            Payment History
          </Typography>
          <TableContainer
            component={Card}
            sx={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>For</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Jan 10, 2023</TableCell>
                  <TableCell>Funds Cleared (View Order)</TableCell>
                  <TableCell>$500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jan 15, 2023</TableCell>
                  <TableCell>Order Cleared (View Order)</TableCell>
                  <TableCell>$300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jan 20, 2023</TableCell>
                  <TableCell>Funds Cleared (View Order)</TableCell>
                  <TableCell>$200</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Earnings;
