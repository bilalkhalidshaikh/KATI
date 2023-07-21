// // import React from 'react';
// // import {
// //   AppBar,
// //   Toolbar,
// //   Typography,
// //   IconButton,
// //   Container,
// //   Grid,
// //   TextField,
// //   Card,
// //   CardContent,
// //   CardMedia,
// //   Button,
// //   Box,
// //   Slider,
// //   Paper,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Divider,
// //   Carousel,
// //   Snackbar,
// // } from '@mui/material';
// // import { Search, Person, Work, CheckCircle, ArrowForward } from '@mui/icons-material';


// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Snackbar from '@mui/material/Snackbar';
// import Search from '@mui/icons-material/Search';
// import Person from '@mui/icons-material/Person';
// import Work from '@mui/icons-material/Work';
// import ArrowForward from '@mui/icons-material/ArrowForward';

// // Import the carousel from 'react-responsive-carousel'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS



// const Services = () => {
//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle search functionality
//   };

//   const handleSnackbarClose = () => {
//     // Handle snackbar close
//   };

//   return (
//     <div>
//       {/* Topbar */}
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="logo">
//             <img src="/path/to/logo.png" alt="Logo" />
//           </IconButton>
//           <div style={{ marginLeft: 'auto' }}>
//             {/* Links */}
//           </div>
//         </Toolbar>
//       </AppBar>

//       {/* Image Carousel */}
//       <Carousel showArrows={true} showThumbs={false}>
//         <div>
//           <img src="/path/to/carousel-image1.jpg" alt="Image 1" />
//           {/* Add any additional content for the first slide */}
//         </div>
//         <div>
//           <img src="/path/to/carousel-image2.jpg" alt="Image 2" />
//           {/* Add any additional content for the second slide */}
//         </div>
//         {/* Add more carousel slides here */}
//       </Carousel>

//       {/* Find The Perfect Nanny or Babysitter */}
//       <Container>
//         <Box mt={4} mb={4}>
//           <Typography variant="h4" align="center">
//             Find The Perfect Nanny or Babysitter
//           </Typography>
//         </Box>
//         <Box display="flex" justifyContent="center">
//           <form onSubmit={handleSearch}>
//             <TextField
//               variant="outlined"
//               placeholder="Search for nannies or babysitters"
//               size="small"
//               fullWidth
//               InputProps={{
//                 endAdornment: (
//                   <IconButton type="submit" color="primary">
//                     <Search />
//                   </IconButton>
//                 ),
//               }}
//             />
//           </form>
//         </Box>
//         <Box mt={4} mb={4}>
//           <Grid container spacing={2}>
//             {/* Cards with images and buttons */}
//             <Grid item xs={12} sm={6} md={4}>
//               <Card>
//                 <CardMedia>
//                   {/* Image 1 */}
//                 </CardMedia>
//                 <CardContent>
//                   <Typography variant="h6">Card Title 1</Typography>
//                   <Typography variant="body1">Card description 1</Typography>
//                   <Button variant="contained" endIcon={<ArrowForward />}>
//                     Go
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Card>
//                 <CardMedia>
//                   {/* Image 2 */}
//                 </CardMedia>
//                 <CardContent>
//                   <Typography variant="h6">Card Title 2</Typography>
//                   <Typography variant="body1">Card description 2</Typography>
//                   <Button variant="contained" endIcon={<ArrowForward />}>
//                     Go
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//             {/* Add more cards here */}
//           </Grid>
//         </Box>
//       </Container>

//       {/* How it works */}
//       <Container>
//         <Box mt={4} mb={4}>
//           <Typography variant="h4" align="center">
//             How it works
//           </Typography>
//         </Box>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6}>
//             <Card>
//               <CardContent>
//                 <ListItemIcon>
//                   <Person />
//                 </ListItemIcon>
//                 <Typography variant="h6">For Families</Typography>
//                 <List>
//                   <ListItem>
//                     <ListItemText primary="Sign Up" secondary="Create an account in just a few minutes" />
//                   </ListItem>
//                   {/* Other list items */}
//                 </List>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Card>
//               <CardContent>
//                 <ListItemIcon>
//                   <Work />
//                 </ListItemIcon>
//                 <Typography variant="h6">For Katies</Typography>
//                 <List>
//                   <ListItem>
//                     <ListItemText primary="Sign Up" secondary="Create an account in just a few minutes" />
//                   </ListItem>
//                   {/* Other list items */}
//                 </List>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* How We Are Different */}
//       <Container>
//         <Box mt={4} mb={4}>
//           <Typography variant="h4" align="center">
//             How We Are Different
//           </Typography>
//         </Box>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" alignItems="center" justifyContent="center">
//               <img src="/path/to/different-image.jpg" alt="Different" />
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box display="flex" flexDirection="column" justifyContent="center">
//               <Typography variant="h6">Exceptional Customer Service</Typography>
//               <Typography variant="body1">
//                 We truly care about our clients and are here to help and answer any questions you have throughout the
//                 process.
//               </Typography>
//               {/* Other content */}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Cards */}
//       <Container>
//         <Box mt={4} mb={4}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={4}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Post a Job</Typography>
//                   <Typography variant="body1">
//                     Post your nanny or babysitting job and have multiple candidates responding to your ad the same day!
//                   </Typography>
//                   <Button endIcon={<ArrowForward />}>Go</Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//             {/* Other cards */}
//           </Grid>
//         </Box>
//       </Container>

//       {/* Testimonials */}
//       <Container>
//         <Box mt={4} mb={4}>
//           <Typography variant="h4" align="center">
//             Testimonials
//           </Typography>
//         </Box>
//         <Box minHeight="400px" position="relative">
//           {/* Testimonials Slider */}
//         </Box>
//       </Container>

//       {/* Articles */}
//       <Container>
//         <Box mt={4} mb={4}>
//           <Typography variant="h4" align="center">
//             Articles
//           </Typography>
//         </Box>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia>
//                 {/* Article Image */}
//               </CardMedia>
//               <CardContent>
//                 <Typography variant="h6">Article Title</Typography>
//                 <Typography variant="body1">Article description</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           {/* Other articles */}
//         </Grid>
//       </Container>

//       {/* Footer */}
//       <footer>
//         {/* Footer content */}
//       </footer>

//       {/* Snackbar */}
//       <Snackbar open={false} onClose={handleSnackbarClose} message="Snackbar message" />
//     </div>
  
//   );
// };

// export default Services;









import React from "react"
import Banner from "./Banner"
import About from "./About"
import Service from "./Service"
import Therapists from "./Therapists"


export default function Services() {
  return (
    <div>
    <Banner />
  </div>
  )
}
