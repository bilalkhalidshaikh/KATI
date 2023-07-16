import React, { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
  ThemeProvider,
  createTheme,
  Avatar,
  Button,
  IconButton
} from '@mui/material'
import { styled } from '@mui/system'
import { AccessTime, EventBusy, CheckCircle, QueryBuilder, ArrowBack, ArrowForward } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0'
    },
    secondary: {
      main: '#f44336'
    }
  }
})

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)'
  }
}))

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2)
}))

const CardDetails = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}))

const CardFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: theme.spacing(2)
}))

const Bookings = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h4' gutterBottom>
        Bookings
      </Typography>

      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label='Pending Bookings' />
        <Tab label='Ongoing Bookings' />
        <Tab label='Canceled Bookings' />
        <Tab label='Completed Bookings' />
      </Tabs>

      <Box sx={{ mt: 4 }}>
        {activeTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <CardHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/bc/bcf82fcf1dc6ca1732b19ed3a18250a0164114b5_full.jpg'
                        alt='Avatar'
                        sx={{ marginRight: '12px' }}
                      />
                      <Box>
                        <Typography variant='body2' color='text.secondary'>
                          10:00 AM
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                          John Doe
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant='h6' color='primary'>
                        $150
                      </Typography>
                    </Box>
                  </CardHeader>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <LocationOnIcon sx={{ fontSize: '1.2rem', marginRight: '4px' }} />
                    <Typography variant='body2' color='text.secondary'>
                      Pakistan Hyderabad (10 km away)
                    </Typography>
                  </Box>
                  <CardDetails>
                    <Typography variant='body2' color='text.secondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </CardDetails>
                  <CardFooter>
                    <Button
                      size='small'
                      color='primary'
                      sx={{ backgroundColor: '#955BFD', padding: '10px' }}
                      variant='contained'
                    >
                      Approve
                    </Button>
                    &emsp;
                    <Button size='small' color='secondary' variant='contained' sx={{ padding: '10px' }}>
                      Decline
                    </Button>
                  </CardFooter>
                </CardContent>
              </StyledCard>
            </Grid>
            {/* Add more pending booking cards */}
          </Grid>
        )}

        {activeTab === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <CardHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/92/92ec067019e4a23b46fe1c911d06f6965a4a5d90_full.jpg'
                        alt='Avatar 1'
                        sx={{ marginRight: '12px' }}
                      />
                      <Box>
                        <Typography variant='body2' color='text.secondary'>
                          11:00 AM
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                          Jane Smith
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant='h6' color='primary'>
                        $200
                      </Typography>
                    </Box>
                  </CardHeader>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <LocationOnIcon sx={{ fontSize: '1.2rem', marginRight: '4px' }} />
                    <Typography variant='body2' color='text.secondary'>
                      Pakistan Hyderabad (10 km away)
                    </Typography>
                  </Box>
                  <CardDetails>
                    <Typography variant='body2' color='text.secondary'>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </Typography>
                  </CardDetails>
                </CardContent>
              </StyledCard>
            </Grid>
            {/* Add more ongoing booking cards */}
          </Grid>
        )}

        {activeTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <CardHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00a3c5c6c315cdb7230bd91cc26e292c26a54dc8_full.jpg'
                        alt='Avatar 2'
                        sx={{ marginRight: '12px' }}
                      />
                      <Box>
                        <Typography variant='body2' color='text.secondary'>
                          12:00 PM
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                          David Johnson
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant='h6' color='primary'>
                        $120
                      </Typography>
                    </Box>
                  </CardHeader>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <LocationOnIcon sx={{ fontSize: '1.2rem', marginRight: '4px' }} />
                    <Typography variant='body2' color='text.secondary'>
                      Pakistan Hyderabad (10 km away)
                    </Typography>
                  </Box>
                  <CardDetails>
                    <Typography variant='body2' color='text.secondary'>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                      fuga.
                    </Typography>
                  </CardDetails>
                </CardContent>
              </StyledCard>
            </Grid>
            {/* Add more canceled booking cards */}
          </Grid>
        )}

        {activeTab === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <CardHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00348039a836c47757090fc6bd586cc8e971678a_full.jpg'
                        alt='Avatar 3'
                        sx={{ marginRight: '12px' }}
                      />
                      <Box>
                        <Typography variant='body2' color='text.secondary'>
                          1:00 PM
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                          Michael Brown
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant='h6' color='primary'>
                        $180
                      </Typography>
                    </Box>
                  </CardHeader>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <LocationOnIcon sx={{ fontSize: '1.2rem', marginRight: '4px' }} />
                    <Typography variant='body2' color='text.secondary'>
                      Pakistan Hyderabad (10 km away)
                    </Typography>
                  </Box>
                  <CardDetails>
                    <Typography variant='body2' color='text.secondary'>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                      esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                      pariatur?
                    </Typography>
                  </CardDetails>
                </CardContent>
              </StyledCard>
            </Grid>
            {/* Add more completed booking cards */}
          </Grid>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default Bookings
