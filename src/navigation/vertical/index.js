// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import BookInformationVariant from 'mdi-material-ui/BookInformationVariant'
import Chat from 'mdi-material-ui/Chat'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { Poll, AttachMoney, HelpOutline, BusinessCenter ,Inbox} from '@mui/icons-material'


const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      sectionTitle: 'Pages'
    },
    // {
      //   title: 'Login',
    //   icon: Login,
    //   path: '/login',
    //   openInNewTab: true
    // },
    // {
      //   title: 'Register',
      //   icon: AccountPlusOutline,
      //   path: '/register',
      //   openInNewTab: true
      // },
      {
        title: 'Bookings',
        icon: BookInformationVariant,
        path: '/pages/bookings',
        openInNewTab: false
      },
      {
        title: 'Earnings',
        icon: AttachMoney,
        path: '/pages/earnings',
        openInNewTab: false
      },
      {
        title: 'Account Settings',
        icon: AccountCogOutline,
        path: '/account-settings'
      },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'Other'
    },
    {
      title: 'Inbox',
      icon: Inbox,
      path: '/pages/chat'
    },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation



// import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { HomeOutline, BookInformationVariant, AttachMoney, AccountCogOutline, InboxSharp } from '@mui/icons-material';

// const navigation = () => {
//   return [
//     {
//       title: 'Dashboard',
//       icon: HomeOutline,
//       path: '/dashboard',
//     },
//     {
//       sectionTitle: 'Pages',
//     },
//     {
//       title: 'Bookings',
//       icon: BookInformationVariant,
//       path: '/pages/bookings',
//       openInNewTab: false,
//     },
//     {
//       title: 'Earnings',
//       icon: AttachMoney,
//       path: '/pages/earnings',
//       openInNewTab: false,
//     },
//     {
//       title: 'Account Settings',
//       icon: AccountCogOutline,
//       path: '/account-settings',
//     },
//     {
//       sectionTitle: 'Other',
//     },
//     {
//       title: 'Inbox',
//       icon: InboxSharp,
//       path: '/pages/chat',
//       submenu: [
//         { avatar: 'user1', name: 'User 1' },
//         { avatar: 'user2', name: 'User 2' },
//         // Add more user objects as needed
//       ],
//     },
//   ];
// };

// export default navigation;
