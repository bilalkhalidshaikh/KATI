// import React from 'react'
// import {
//   Box,
//   Avatar,
//   Typography,
//   IconButton,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   Grid,
//   Paper
// } from '@mui/material'
// import { LocationOn, Chat, Block, Report } from '@mui/icons-material'

// const BookingDetails = () => {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Card sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}>
//         <CardContent>
//           <CardHeader
//             title={
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <Avatar src='/profile-picture.jpg' alt='Profile Picture' sx={{ width: '64px', height: '64px' }} />
//                 <Box sx={{ ml: 2 }}>
//                   <Typography variant='h6' color='primary'>
//                     John Doe
//                   </Typography>
//                   <Typography variant='subtitle2' color='text.secondary'>
//                     Location: Pakistan, Hyderabad
//                   </Typography>
//                 </Box>
//               </Box>
//             }
//           />
//           <Divider sx={{ my: 2 }} />
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: '#f5f5f5',
//                   borderRadius: '8px',
//                   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//                   transition: 'box-shadow 0.3s ease-in-out',
//                   '&:hover': {
//                     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)'
//                   }
//                 }}
//               >
//                 <Typography variant='subtitle1' color='text.secondary' gutterBottom>
//                   Scheduled Dates and Times:
//                 </Typography>
//                 <Typography variant='body1' gutterBottom>
//                   <span style={{ fontWeight: 'bold' }}>16 July 2023</span>, 11:00 AM - 6:00 PM
//                 </Typography>
//                 <Typography variant='body1' gutterBottom>
//                   <span style={{ fontWeight: 'bold' }}>17 July 2023</span>, 1:00 PM - 9:00 PM
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: '#f5f5f5',
//                   borderRadius: '8px',
//                   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//                   transition: 'box-shadow 0.3s ease-in-out',
//                   '&:hover': {
//                     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)'
//                   }
//                 }}
//               >
//                 <Typography variant='subtitle1' color='text.secondary' gutterBottom>
//                   Budget:
//                 </Typography>
//                 <Typography variant='body1' color='primary'>
//                   $55
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//           <Divider sx={{ my: 2 }} />
//           <Typography variant='subtitle1' color='text.secondary' gutterBottom>
//             Status of Booking:
//           </Typography>
//           <Typography variant='body1' color='primary'>
//             Pending
//           </Typography>
//           <Divider sx={{ my: 2 }} />
//           <Typography variant='subtitle1' color='text.secondary' gutterBottom>
//             Location:
//           </Typography>
//           <Box
//             sx={{
//               my: 2,
//               height: '200px',
//               borderRadius: '8px',
//               overflow: 'hidden',
//               boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//               transition: 'box-shadow 0.3s ease-in-out',
//               '&:hover': {
//                 boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)'
//               }
//             }}
//           >
//             {/* Google Map iframe */}
//             <iframe
//               title='Google Map'
//               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387411.4476096284!2d-74.25987362513998!3d40.69767062103432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903ce155677%3A0xb19d03c58222073a!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1635984081830!5m2!1sen!2sin'
//               width='100%'
//               height='100%'
//               style={{ border: 0 }}
//               allowFullScreen
//               loading='lazy'
//             ></iframe>
//           </Box>
//           <Divider sx={{ my: 2 }} />
//           <Typography variant='subtitle1' color='text.secondary' gutterBottom>
//             Description:
//           </Typography>
//           <Typography variant='body1'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan metus a tellus condimentum, eget
//             efficitur justo fermentum.
//           </Typography>
//           <Box sx={{ mt: 4 }}>
//             <Button variant='contained' color='primary' sx={{ borderRadius: '24px', textTransform: 'none' }}>
//               Send Message
//             </Button>
//           </Box>
//           <Box sx={{ mt: 2 }}>
//             <IconButton
//               color='primary'
//               sx={{
//                 backgroundColor: '#f5f5f5',
//                 ':hover': { backgroundColor: '#e0e0e0' },
//                 borderRadius: '8px',
//                 '&:hover': {
//                   backgroundColor: '#ff4081'
//                 }
//               }}
//             >
//               <Chat />
//             </IconButton>
//             <IconButton
//               color='error'
//               sx={{
//                 backgroundColor: '#f5f5f5',
//                 ':hover': { backgroundColor: '#e0e0e0' },
//                 borderRadius: '8px',
//                 '&:hover': {
//                   backgroundColor: '#ff4081'
//                 }
//               }}
//             >
//               <Block />
//             </IconButton>
//             <IconButton
//               color='error'
//               sx={{
//                 backgroundColor: '#f5f5f5',
//                 ':hover': { backgroundColor: '#e0e0e0' },
//                 borderRadius: '8px',
//                 '&:hover': {
//                   backgroundColor: '#ff4081'
//                 }
//               }}
//             >
//               <Report />
//             </IconButton>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   )
// }

// export default BookingDetails


















import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper
} from '@mui/material';
import { LocationOn, Chat, Block, Report } from '@mui/icons-material';

const BookingDetails = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}>
        <CardContent>
          <CardHeader
            title={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/profile-picture.jpg' alt='Profile Picture' sx={{ width: '64px', height: '64px' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant='h6' color='primary'>
                    John Doe
                  </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Location: Pakistan, Hyderabad
                  </Typography>
                </Box>
              </Box>
            }
          />
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                  Scheduled Dates and Times:
                </Typography>
                <Typography variant='body1' gutterBottom>
                  <span style={{ fontWeight: 'bold' }}>16 July 2023</span>, 11:00 AM - 6:00 PM
                </Typography>
                <Typography variant='body1' gutterBottom>
                  <span style={{ fontWeight: 'bold' }}>17 July 2023</span>, 1:00 PM - 9:00 PM
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                  Budget:
                </Typography>
                <Typography variant='body1' color='primary'>
                  \$55
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            Status of Booking:
          </Typography>
          <Typography variant='body1' color='primary'>
            Pending
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            Location:
          </Typography>
          <Box
            sx={{
              my: 2,
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14463.717682345!2d78.429571!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e3e3e3e3e3%3A0x3bcb99e3e3e3e3e3!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1635432100000!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='contained' startIcon={<Chat />} color='primary'>
              Send Message
            </Button>
            <Button variant='contained' startIcon={<Block />} color='error'>
              Cancel Booking
            </Button>
            <Button variant='contained' startIcon={<Report />} color='secondary'>
              Report User
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookingDetails;
