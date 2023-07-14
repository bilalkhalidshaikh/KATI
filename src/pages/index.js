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




 






import React from "react";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { styled } from "@mui/system";
import { Poll, CurrencyUsd, HelpCircleOutline, BriefcaseVariantOutline } from "@mui/icons-material";
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Table from "src/views/dashboard/Table";
import Trophy from "src/views/dashboard/Trophy";
import TotalEarning from "src/views/dashboard/TotalEarning";
import StatisticsCard from "src/views/dashboard/StatisticsCard";
import WeeklyOverview from "src/views/dashboard/WeeklyOverview";
import DepositWithdraw from "src/views/dashboard/DepositWithdraw";
import SalesByCountries from "src/views/dashboard/SalesByCountries";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
  },
});

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const StyledCardStatistics = styled(CardStatisticsVerticalComponent)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[10],
  },
}));

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid>
          <StyledGrid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </StyledGrid>
          <StyledGrid item xs={12} md={6} lg={4}>
            <TotalEarning />
          </StyledGrid>
          <StyledGrid item xs={12} md={6} lg={4}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <StyledCardStatistics
                  stats="$25.6k"
                  icon={<Poll />}
                  color="success"
                  trendNumber="+42%"
                  title="Total Profit"
                  subtitle="Weekly Profit"
                />
              </Grid>
              <Grid item xs={6}>
                <StyledCardStatistics
                  stats="$78"
                  title="Refunds"
                  trend="negative"
                  color="secondary"
                  trendNumber="-15%"
                  subtitle="Past Month"
                  icon={<CurrencyUsd />}
                />
              </Grid>
              <Grid item xs={6}>
                <StyledCardStatistics
                  stats="862"
                  trend="negative"
                  trendNumber="-18%"
                  title="New Project"
                  subtitle="Yearly Project"
                  icon={<BriefcaseVariantOutline />}
                />
              </Grid>
              <Grid item xs={6}>
                <StyledCardStatistics
                  stats="15"
                  color="warning"
                  trend="negative"
                  trendNumber="-18%"
                  subtitle="Last Week"
                  title="Sales Queries"
                  icon={<HelpCircleOutline />}
                />
              </Grid>
            </Grid>
          </StyledGrid>
          <StyledGrid item xs={12} md={6} lg={4}>
            <SalesByCountries />
          </StyledGrid>
          <Grid item xs={12} md={12} lg={8}>
            <DepositWithdraw />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </ThemeProvider>
  );
};

export default Dashboard;
