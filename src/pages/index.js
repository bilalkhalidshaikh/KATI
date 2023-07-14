// // ** MUI Imports
// import Grid from '@mui/material/Grid'

// // ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// // ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// // ** Styled Component Import
// import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// // ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'
// import Trophy from 'src/views/dashboard/Trophy'
// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// const Dashboard = () => {
//   return (
//     // <ApexChartWrapper>
//     //   <Grid container spacing={6}>
//     //     <Grid item xs={12} md={4}>
//     //       <Trophy />
//     //     </Grid>
//     //     <Grid item xs={12} md={8}>
//     //       <StatisticsCard />
//     //     </Grid>
//     //     <Grid item xs={12} md={6} lg={4}>
//     //       <WeeklyOverview />
//     //     </Grid>
//     //     <Grid item xs={12} md={6} lg={4}>
//     //       <TotalEarning />
//     //     </Grid>
//     //     <Grid item xs={12} md={6} lg={4}>
//     //       <Grid container spacing={6}>
//     //         <Grid item xs={6}>
//     //           <CardStatisticsVerticalComponent
//     //             stats='$25.6k'
//     //             icon={<Poll />}
//     //             color='success'
//     //             trendNumber='+42%'
//     //             title='Total Profit'
//     //             subtitle='Weekly Profit'
//     //           />
//     //         </Grid>
//     //         <Grid item xs={6}>
//     //           <CardStatisticsVerticalComponent
//     //             stats='$78'
//     //             title='Refunds'
//     //             trend='negative'
//     //             color='secondary'
//     //             trendNumber='-15%'
//     //             subtitle='Past Month'
//     //             icon={<CurrencyUsd />}
//     //           />
//     //         </Grid>
//     //         <Grid item xs={6}>
//     //           <CardStatisticsVerticalComponent
//     //             stats='862'
//     //             trend='negative'
//     //             trendNumber='-18%'
//     //             title='New Project'
//     //             subtitle='Yearly Project'
//     //             icon={<BriefcaseVariantOutline />}
//     //           />
//     //         </Grid>
//     //         <Grid item xs={6}>
//     //           <CardStatisticsVerticalComponent
//     //             stats='15'
//     //             color='warning'
//     //             trend='negative'
//     //             trendNumber='-18%'
//     //             subtitle='Last Week'
//     //             title='Sales Queries'
//     //             icon={<HelpCircleOutline />}
//     //           />
//     //         </Grid>
//     //       </Grid>
//     //     </Grid>
//     //     <Grid item xs={12} md={6} lg={4}>
//     //       <SalesByCountries />
//     //     </Grid>
//     //     <Grid item xs={12} md={12} lg={8}>
//     //       <DepositWithdraw />
//     //     </Grid>
//     //     <Grid item xs={12}>
//     //       <Table />
//     //     </Grid>
//     //   </Grid>
//     // </ApexChartWrapper>
//     // <>
//     // <h1>Under Development...</h1>
//     // </>
//   )
// }

// export default Dashboard




// import React from "react";
// import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledCard = styled(Card)(({ theme }) => ({
//   boxShadow: theme.shadows[3],
//   transition: "box-shadow 0.3s ease-in-out",
//   "&:hover": {
//     boxShadow: theme.shadows[5],
//   },
// }));

// const AnimatedBox = styled(Box)({
//   animation: `$fadeIn 0.5s ease-in-out`,
//   animationFillMode: "forwards",
//   opacity: 0,
//   "@keyframes fadeIn": {
//     "0%": { opacity: 0 },
//     "100%": { opacity: 1 },
//   },
// });

// const DashboardPage = () => {
//   return (
//     // <AnimatedBox sx={{ p: 3 }}>
//     <>
//       <Typography variant="h4" gutterBottom>
//         Booking
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Completed Bookings
//               </Typography>
//               <Typography variant="h4">10</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Ongoing Bookings
//               </Typography>
//               <Typography variant="h4">5</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Canceled Bookings
//               </Typography>
//               <Typography variant="h4">3</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//       </Grid>

//       <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
//         Revenue
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Total Earnings
//               </Typography>
//               <Typography variant="h4">$1000</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Expected Earnings
//               </Typography>
//               <Typography variant="h4">$800</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Canceled Earnings
//               </Typography>
//               <Typography variant="h4">$200</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//       </Grid>

//       <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
//         Statistics
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Impressions
//               </Typography>
//               <Typography variant="h4">5000</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Clicks
//               </Typography>
//               <Typography variant="h4">200</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <StyledCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Conversions
//               </Typography>
//               <Typography variant="h4">10</Typography>
//             </CardContent>
//           </StyledCard>
//         </Grid>
//       </Grid>

//       <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
//         Recent Activities
//       </Typography>
//       <StyledCard>
//         <CardContent>
//           <Typography variant="body1" gutterBottom>
//             User sent you a message
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Booking completed
//           </Typography>
//         </CardContent>
//       </StyledCard>
//     {/* </AnimatedBox> */}
//     </>
//   );
// };

// export default DashboardPage;






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
import {
  Poll,
  AttachMoney,
  HelpOutline,
  BusinessCenter,
} from "@mui/icons-material";

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

const AnimatedBox = styled(Box)({
  animation: `$fadeIn 0.5s ease-in-out`,
  animationFillMode: "forwards",
  opacity: 0,
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});

const DashboardPage = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <AnimatedBox sx={{ p: 3 }}> */}
        <Typography variant="h4" gutterBottom>
          Booking
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <Poll fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Completed Bookings
                </Typography>
                <Typography variant="h4">10</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <Poll fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Ongoing Bookings
                </Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <Poll fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Canceled Bookings
                </Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Revenue
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <AttachMoney fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Total Earnings
                </Typography>
                <Typography variant="h4">$1000</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <AttachMoney fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Expected Earnings
                </Typography>
                <Typography variant="h4">$800</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <AttachMoney fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Canceled Earnings
                </Typography>
                <Typography variant="h4">$200</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Statistics
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <HelpOutline fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Impressions
                </Typography>
                <Typography variant="h4">5000</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <HelpOutline fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Clicks
                </Typography>
                <Typography variant="h4">200</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardContent>
                <HelpOutline fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Conversions
                </Typography>
                <Typography variant="h4">10</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Recent Activities
        </Typography>
        <StyledCard>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              User sent you a message
            </Typography>
            <Typography variant="body1" gutterBottom>
              Booking completed
            </Typography>
          </CardContent>
        </StyledCard>
      {/* </AnimatedBox> */}
    </ThemeProvider>
  );
};

export default DashboardPage;
