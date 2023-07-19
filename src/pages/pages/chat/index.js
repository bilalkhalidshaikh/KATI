// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   Box,
// // //   Grid,
// // //   Typography,
// // //   List,
// // //   ListItem,
// // //   ListItemAvatar,
// // //   Avatar,
// // //   ListItemText,
// // //   Divider,
// // //   Paper,
// // //   IconButton,
// // //   TextField,
// // //   Snackbar,
// // // } from '@mui/material';
// // // import { Chat, ArrowBack, AttachFile } from '@mui/icons-material';
// // // import { useDropzone } from 'react-dropzone';

// // // const ChatComponent = () => {
// // //   const [selectedChat, setSelectedChat] = useState(null);
// // //   const [messages, setMessages] = useState([]);
// // //   const [selectedUserDetails, setSelectedUserDetails] = useState(null);
// // //   const [attachments, setAttachments] = useState([]);
// // //   const [snackbarOpen, setSnackbarOpen] = useState(false);

// // //   const chats = [
// // //     {
// // //       id: 1,
// // //       name: 'John Doe',
// // //       messages: [
// // //         { id: 1, content: 'Hello, I have a question about my order.', timestamp: '10:30 AM', sender: 'user' },
// // //         // Add more messages for John Doe
// // //       ],
// // //       details: {
// // //         about: 'About John Doe',
// // //         location: 'Canada',
// // //         joined: 'On Kati since Jul 2020',
// // //         rating: '5',
// // //         ratingCount: '10',
// // //       },
// // //     },
// // //     {
// // //       id: 2,
// // //       name: 'Jane Smith',
// // //       messages: [
// // //         { id: 1, content: 'Hi, I need help with my website design.', timestamp: 'Yesterday', sender: 'user' },
// // //         // Add more messages for Jane Smith
// // //       ],
// // //       details: {
// // //         about: 'About Jane Smith',
// // //         location: 'United States',
// // //         joined: 'On Kati since Jan 2021',
// // //         rating: '4.7',
// // //         ratingCount: '15',
// // //       },
// // //     },
// // //     // Add more chats here
// // //     {
// // //       id: 3,
// // //       name: 'Alice Johnson',
// // //       messages: [
// // //         { id: 1, content: 'Hey, can you assist me with my account issue?', timestamp: '10:15 AM', sender: 'user' },
// // //         // Add more messages for Alice Johnson
// // //       ],
// // //       details: {
// // //         about: 'About Alice Johnson',
// // //         location: 'Australia',
// // //         joined: 'On Kati since Mar 2022',
// // //         rating: '4.2',
// // //         ratingCount: '8',
// // //       },
// // //     },
// // //     // Add more chats here
// // //   ];

// // //   useEffect(() => {
// // //     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
// // //     setMessages(storedMessages);
// // //   }, []);

// // //   const saveMessagesToLocalStorage = (messages) => {
// // //     localStorage.setItem('chatMessages', JSON.stringify(messages));
// // //   };

// // //   const handleChatClick = (chat) => {
// // //     setSelectedChat(chat);
// // //     setMessages(chat.messages);
// // //     setSelectedUserDetails(chat.details);
// // //   };

// // //   const handleBackClick = () => {
// // //     setSelectedChat(null);
// // //     setMessages([]);
// // //     setSelectedUserDetails(null);
// // //   };

// // //   const handleSendMessage = (e) => {
// // //     e.preventDefault();
// // //     const messageContent = e.target.message.value.trim();
// // //     if (messageContent !== '') {
// // //       const newMessage = {
// // //         id: messages.length + 1,
// // //         content: messageContent,
// // //         timestamp: new Date().toLocaleTimeString(),
// // //         sender: 'user',
// // //       };
// // //       setMessages((prevMessages) => [...prevMessages, newMessage]);
// // //       saveMessagesToLocalStorage([...messages, newMessage]);
// // //       e.target.message.value = '';

// // //       // Simulate auto-response after a short delay
// // //       setTimeout(() => {
// // //         const autoResponse = {
// // //           id: messages.length + 2,
// // //           content: 'Thank you for getting in touch! We are currently offline and will respond to your query once we are back online at 6 AM. Thank you.',
// // //           timestamp: new Date().toLocaleTimeString(),
// // //           sender: 'bot',
// // //         };
// // //         setMessages((prevMessages) => [...prevMessages, autoResponse]);
// // //         saveMessagesToLocalStorage([...messages, autoResponse]);
// // //       }, 1000); // Adjust the delay as needed
// // //     } else {
// // //       setSnackbarOpen(true);
// // //     }
// // //   };

// // //   const handleSnackbarClose = () => {
// // //     setSnackbarOpen(false);
// // //   };

// // //   const handleAttachmentDrop = (acceptedFiles) => {
// // //     setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
// // //   };

// // //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleAttachmentDrop });

// // //   return (
// // //     <Box sx={{ p: 3, height: '90vh', backgroundColor: '#F2F6FF' }}>
// // //       <Grid container spacing={2} sx={{ height: '100%' }}>
// // //         <Grid item xs={12} sm={4} sx={{ height: '100%', overflow: 'hidden' }}>
// // //           <Paper elevation={3}>
// // //             <List>
// // //               {chats.map((chat) => (
// // //                 <ListItem
// // //                   key={chat.id}
// // //                   button
// // //                   onClick={() => handleChatClick(chat)}
// // //                   sx={{
// // //                     backgroundColor: chat === selectedChat ? '#E0E7FF' : 'inherit',
// // //                     transition: 'background-color 0.3s',
// // //                     '&:hover': {
// // //                       backgroundColor: '#E0E7FF',
// // //                     },
// // //                   }}
// // //                 >
// // //                   <ListItemAvatar>
// // //                     <Avatar alt={chat.name} src={`https://avatars.dicebear.com/api/human/${chat.id}.svg`} />
// // //                   </ListItemAvatar>
// // //                   <ListItemText
// // //                     primary={chat.name}
// // //                     secondary={chat.messages[chat.messages.length - 1]?.content || 'No messages'}
// // //                     primaryTypographyProps={{
// // //                       fontWeight: chat === selectedChat ? 'bold' : 'inherit',
// // //                       color: chat === selectedChat ? '#3366FF' : 'inherit',
// // //                     }}
// // //                   />
// // //                   <Typography variant="caption" color="text.secondary">
// // //                     {chat.messages[chat.messages.length - 1]?.timestamp || ''}
// // //                   </Typography>
// // //                 </ListItem>
// // //               ))}
// // //             </List>
// // //           </Paper>
// // //         </Grid>
// // //         <Grid item xs={12} sm={8}>
// // //           <Grid container spacing={2} sx={{ height: '100%' }}>
// // //             <Grid item xs={12} sm={selectedChat ? 8 : 12}>
// // //               <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// // //                 <Box
// // //                   sx={{
// // //                     p: 2,
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
// // //                     backgroundColor: '#FFFFFF',
// // //                   }}
// // //                 >
// // //                   {selectedChat ? (
// // //                     <>
// // //                       <IconButton onClick={handleBackClick}>
// // //                         <ArrowBack />
// // //                       </IconButton>
// // //                       <Typography variant="h6" color="text.secondary">
// // //                         {selectedChat.name}
// // //                       </Typography>
// // //                     </>
// // //                   ) : (
// // //                     <Typography variant="h6" color="text.secondary">
// // //                       Select a chat to start messaging
// // //                     </Typography>
// // //                   )}
// // //                 </Box>
// // //                 <Divider />
// // //                 <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' ,height:'60vh'}}>
// // //                   {/* Chat messages */}
// // //                   <Box sx={{ display: selectedChat ? 'flex' : 'none', flexDirection: 'column', gap: '8px' }}>
// // //                     {messages.map((message) => (
// // //                       <Box
// // //                         key={message.id}
// // //                         sx={{
// // //                           alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
// // //                           backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
// // //                           borderRadius: '8px',
// // //                           p: 2,
// // //                           maxWidth: '70%',
// // //                         }}
// // //                       >
// // //                         <Typography variant="body1">{message.content}</Typography>
// // //                         <Typography variant="caption" color="text.secondary">
// // //                           {message.timestamp}
// // //                         </Typography>
// // //                       </Box>
// // //                     ))}
// // //                     {messages.length === 0 && (
// // //                       <Typography variant="h6" color="text.secondary">
// // //                         Please select a chat to start messaging
// // //                       </Typography>
// // //                     )}
// // //                   </Box>
// // //                 </Box>
// // //                 <Divider />
// // //                 <Box sx={{ p: 2 }}>
// // //                   {selectedChat && (
// // //                     <form onSubmit={handleSendMessage}>
// // //                       <Box
// // //                         sx={{
// // //                           display: 'flex',
// // //                           alignItems: 'center',
// // //                           gap: '8px',
// // //                           boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
// // //                           backgroundColor: '#FFFFFF',
// // //                           padding: '4px',
// // //                           borderRadius: '4px',
// // //                         }}
// // //                       >
// // //                         <IconButton component="label">
// // //                           <AttachFile />
// // //                           <input type="file" hidden {...getInputProps()} />
// // //                         </IconButton>
// // //                         <TextField
// // //                           name="message"
// // //                           placeholder="Type your message..."
// // //                           variant="outlined"
// // //                           fullWidth
// // //                           size="small"
// // //                         />
// // //                         <IconButton type="submit">
// // //                           <Chat />
// // //                         </IconButton>
// // //                       </Box>
// // //                     </form>
// // //                   )}
// // //                 </Box>
// // //               </Paper>
// // //             </Grid>
// // //             {selectedUserDetails && (
// // //               <Grid item xs={12} sm={4}>
// // //                 <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //                   <Box sx={{ p: 2 }}>
// // //                     <Avatar
// // //                       alt={selectedChat?.name}
// // //                       src={`https://avatars.dicebear.com/api/human/${selectedChat?.id}.svg`}
// // //                       sx={{ width: 100, height: 100 }}
// // //                     />
// // //                   </Box>
// // //                   <Typography variant="h6" color="text.secondary">
// // //                     {selectedUserDetails.about}
// // //                   </Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     From
// // //                   </Typography>
// // //                   <Typography variant="body1">{selectedUserDetails.location}</Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     On Kati since
// // //                   </Typography>
// // //                   <Typography variant="body1">{selectedUserDetails.joined}</Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     Rating
// // //                   </Typography>
// // //                   <Typography variant="body1">
// // //                     {selectedUserDetails.rating} ({selectedUserDetails.ratingCount})
// // //                   </Typography>
// // //                 </Paper>
// // //               </Grid>
// // //             )}
// // //           </Grid>
// // //         </Grid>
// // //       </Grid>
// // //       <Snackbar
// // //         open={snackbarOpen}
// // //         autoHideDuration={3000}
// // //         onClose={handleSnackbarClose}
// // //         message="Please enter a message"
// // //       />
// // //     </Box>
// // //   );
// // // };

// // // export default ChatComponent;

// // import React, { useState, useEffect } from 'react';
// // import {
// //   Box,
// //   Grid,
// //   Typography,
// //   List,
// //   ListItem,
// //   ListItemAvatar,
// //   Avatar,
// //   ListItemText,
// //   Divider,
// //   Paper,
// //   IconButton,
// //   TextField,
// //   Snackbar,
// // } from '@mui/material';
// // import { Chat, ArrowBack, AttachFile, Send } from '@mui/icons-material';
// // import { useDropzone } from 'react-dropzone';

// // const ChatComponent = () => {
// //   const [selectedChat, setSelectedChat] = useState(null);
// //   const [messages, setMessages] = useState([]);
// //   const [selectedUserDetails, setSelectedUserDetails] = useState(null);
// //   const [attachments, setAttachments] = useState([]);
// //   const [snackbarOpen, setSnackbarOpen] = useState(false);

// //   const chats = [
// //     // Chat data goes here
// //   ];

// //   useEffect(() => {
// //     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
// //     setMessages(storedMessages);
// //   }, []);

// //   const saveMessagesToLocalStorage = (messages) => {
// //     localStorage.setItem('chatMessages', JSON.stringify(messages));
// //   };

// //   const handleChatClick = (chat) => {
// //     setSelectedChat(chat);
// //     setMessages(chat.messages);
// //     setSelectedUserDetails(chat.details);
// //   };

// //   const handleBackClick = () => {
// //     setSelectedChat(null);
// //     setMessages([]);
// //     setSelectedUserDetails(null);
// //   };

// //   const handleSendMessage = (e) => {
// //     e.preventDefault();
// //     const messageContent = e.target.message.value.trim();
// //     if (messageContent !== '') {
// //       const newMessage = {
// //         id: messages.length + 1,
// //         content: messageContent,
// //         timestamp: new Date().toLocaleTimeString(),
// //         sender: 'user',
// //       };
// //       setMessages((prevMessages) => [...prevMessages, newMessage]);
// //       saveMessagesToLocalStorage([...messages, newMessage]);
// //       e.target.message.value = '';

// //       // Simulate auto-response after a short delay
// //       setTimeout(() => {
// //         const autoResponse = {
// //           id: messages.length + 2,
// //           content:
// //             'Thank you for getting in touch! We are currently offline and will respond to your query once we are back online at 6 AM. Thank you.',
// //           timestamp: new Date().toLocaleTimeString(),
// //           sender: 'bot',
// //         };
// //         setMessages((prevMessages) => [...prevMessages, autoResponse]);
// //         saveMessagesToLocalStorage([...messages, autoResponse]);
// //       }, 1000); // Adjust the delay as needed
// //     } else {
// //       setSnackbarOpen(true);
// //     }
// //   };

// //   const handleSnackbarClose = () => {
// //     setSnackbarOpen(false);
// //   };

// //   const handleAttachmentDrop = (acceptedFiles) => {
// //     setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
// //   };

// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleAttachmentDrop });

// //   return (
// //     <Box sx={{ p: 3, height: '90vh', backgroundColor: '#F2F6FF' }}>
// //       <Grid container spacing={2} sx={{ height: '100%' }}>
// //         <Grid item xs={12} sm={4} sx={{ height: '100%', overflow: 'hidden' }}>
// //           <Paper elevation={3}>
// //             <List>
// //               {chats.map((chat) => (
// //                 <ListItem
// //                   key={chat.id}
// //                   button
// //                   onClick={() => handleChatClick(chat)}
// //                   sx={{
// //                     backgroundColor: chat === selectedChat ? '#E0E7FF' : 'inherit',
// //                     transition: 'background-color 0.3s',
// //                     '&:hover': {
// //                       backgroundColor: '#E0E7FF',
// //                     },
// //                   }}
// //                 >
// //                   <ListItemAvatar>
// //                     <Avatar alt={chat.name} src={`https://avatars.dicebear.com/api/human/${chat.id}.svg`} />
// //                   </ListItemAvatar>
// //                   <ListItemText
// //                     primary={chat.name}
// //                     secondary={chat.messages[chat.messages.length - 1]?.content || 'No messages'}
// //                     primaryTypographyProps={{
// //                       fontWeight: chat === selectedChat ? 'bold' : 'inherit',
// //                       color: chat === selectedChat ? '#3366FF' : 'inherit',
// //                     }}
// //                   />
// //                   <Typography variant="caption" color="text.secondary">
// //                     {chat.messages[chat.messages.length - 1]?.timestamp || ''}
// //                   </Typography>
// //                 </ListItem>
// //               ))}
// //             </List>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={12} sm={8}>
// //           <Grid container spacing={2} sx={{ height: '100%' }}>
// //             <Grid item xs={12} sm={selectedChat ? 8 : 12}>
// //               <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// //                 <Box
// //                   sx={{
// //                     p: 2,
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
// //                     backgroundColor: '#FFFFFF',
// //                   }}
// //                 >
// //                   {selectedChat ? (
// //                     <>
// //                       <IconButton onClick={handleBackClick}>
// //                         <ArrowBack />
// //                       </IconButton>
// //                       <Typography variant="h6" color="text.secondary">
// //                         {selectedChat.name}
// //                       </Typography>
// //                     </>
// //                   ) : (
// //                     <Typography variant="h6" color="text.secondary">
// //                       Select a chat to start messaging
// //                     </Typography>
// //                   )}
// //                 </Box>
// //                 <Divider />
// //                 <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto', height: '60vh' }}>
// //                   {/* Chat messages */}
// //                   <Box sx={{ display: selectedChat ? 'flex' : 'none', flexDirection: 'column', gap: '8px' }}>
// //                     {messages.map((message) => (
// //                       <Box
// //                         key={message.id}
// //                         sx={{
// //                           alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
// //                           backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
// //                           borderRadius: '8px',
// //                           p: 2,
// //                           maxWidth: '70%',
// //                         }}
// //                       >
// //                         <Typography variant="body1">{message.content}</Typography>
// //                         <Typography variant="caption" color="text.secondary">
// //                           {message.timestamp}
// //                         </Typography>
// //                       </Box>
// //                     ))}
// //                     {messages.length === 0 && (
// //                       <Typography variant="h6" color="text.secondary">
// //                         Please select a chat to start messaging
// //                       </Typography>
// //                     )}
// //                   </Box>
// //                 </Box>
// //                 <Divider />
// //                 <Box sx={{ p: 2 }}>
// //                   {selectedChat && (
// //                     <form onSubmit={handleSendMessage}>
// //                       <Box
// //                         sx={{
// //                           display: 'flex',
// //                           alignItems: 'center',
// //                           gap: '8px',
// //                           boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
// //                           backgroundColor: '#FFFFFF',
// //                           padding: '4px',
// //                           borderRadius: '4px',
// //                         }}
// //                       >
// //                         <IconButton component="label">
// //                           <AttachFile />
// //                           <input type="file" hidden {...getInputProps()} />
// //                         </IconButton>
// //                         <TextField
// //                           name="message"
// //                           placeholder="Type your message..."
// //                           variant="outlined"
// //                           fullWidth
// //                           size="small"
// //                         />
// //                         <IconButton type="submit">
// //                           <Send />
// //                         </IconButton>
// //                       </Box>
// //                     </form>
// //                   )}
// //                 </Box>
// //               </Paper>
// //             </Grid>
// //             {selectedUserDetails && (
// //               <Grid item xs={12} sm={4}>
// //                 <Paper
// //                   elevation={3}
// //                   sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
// //                 >
// //                   <Box sx={{ p: 2 }}>
// //                     <Avatar
// //                       alt={selectedChat?.name}
// //                       src={`https://avatars.dicebear.com/api/human/${selectedChat?.id}.svg`}
// //                       sx={{ width: 100, height: 100 }}
// //                     />
// //                   </Box>
// //                   <Typography variant="h6" color="text.secondary">
// //                     {selectedUserDetails.about}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     From
// //                   </Typography>
// //                   <Typography variant="body1">{selectedUserDetails.location}</Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     On Kati since
// //                   </Typography>
// //                   <Typography variant="body1">{selectedUserDetails.joined}</Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Rating
// //                   </Typography>
// //                   <Typography variant="body1">
// //                     {selectedUserDetails.rating} ({selectedUserDetails.ratingCount})
// //                   </Typography>
// //                 </Paper>
// //               </Grid>
// //             )}
// //           </Grid>
// //         </Grid>
// //       </Grid>
// //       <Snackbar
// //         open={snackbarOpen}
// //         autoHideDuration={3000}
// //         onClose={handleSnackbarClose}
// //         message="Please enter a message"
// //       />
// //     </Box>
// //   );
// // };

// // export default ChatComponent;

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Grid,
//   Typography,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
//   Divider,
//   Paper,
//   IconButton,
//   TextField,
//   Snackbar,
// } from '@mui/material';
// import { Chat, ArrowBack, AttachFile, Send } from '@mui/icons-material';
// import { useDropzone } from 'react-dropzone';

// const ChatComponent = () => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [selectedUserDetails, setSelectedUserDetails] = useState(null);
//   const [attachments, setAttachments] = useState([]);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   const chats = [
//     {
//       id: 1,
//       name: 'John Doe',
//       messages: [
//         { id: 1, content: 'Hello, I have a question about my order.', timestamp: '10:30 AM', sender: 'user' },
//         // Add more messages for John Doe
//       ],
//       details: {
//         about: 'About John Doe',
//         location: 'Canada',
//         joined: 'On Kati since Jul 2020',
//         rating: '5',
//         ratingCount: '10',
//       },
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       messages: [
//         { id: 1, content: 'Hi, I need help with my website design.', timestamp: 'Yesterday', sender: 'user' },
//         // Add more messages for Jane Smith
//       ],
//       details: {
//         about: 'About Jane Smith',
//         location: 'United States',
//         joined: 'On Kati since Jan 2021',
//         rating: '4.7',
//         ratingCount: '15',
//       },
//     },
//     // Add more chats here
//     {
//       id: 3,
//       name: 'Alice Johnson',
//       messages: [
//         { id: 1, content: 'Hey, can you assist me with my account issue?', timestamp: '10:15 AM', sender: 'user' },
//         // Add more messages for Alice Johnson
//       ],
//       details: {
//         about: 'About Alice Johnson',
//         location: 'Australia',
//         joined: 'On Kati since Mar 2022',
//         rating: '4.2',
//         ratingCount: '8',
//       },
//     },
//     // Add more chats here
//   ];

//   useEffect(() => {
//     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
//     setMessages(storedMessages);
//   }, []);

//   const saveMessagesToLocalStorage = (messages) => {
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//   };

//   const handleChatClick = (chat) => {
//     setSelectedChat(chat);
//     setMessages(chat.messages);
//     setSelectedUserDetails(chat.details);
//   };

//   const handleBackClick = () => {
//     setSelectedChat(null);
//     setMessages([]);
//     setSelectedUserDetails(null);
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const messageContent = e.target.message.value.trim();
//     if (messageContent !== '') {
//       const newMessage = {
//         id: messages.length + 1,
//         content: messageContent,
//         timestamp: new Date().toLocaleTimeString(),
//         sender: 'user',
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       saveMessagesToLocalStorage([...messages, newMessage]);
//       e.target.message.value = '';

//       // Simulate auto-response after a short delay
//       setTimeout(() => {
//         const autoResponse = {
//           id: messages.length + 2,
//           content:
//             'Thank you for getting in touch! We are currently offline and will respond to your query once we are back online at 6 AM. Thank you.',
//           timestamp: new Date().toLocaleTimeString(),
//           sender: 'bot',
//         };
//         setMessages((prevMessages) => [...prevMessages, autoResponse]);
//         saveMessagesToLocalStorage([...messages, autoResponse]);
//       }, 1000); // Adjust the delay as needed
//     } else {
//       setSnackbarOpen(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   const handleAttachmentDrop = (acceptedFiles) => {
//     setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleAttachmentDrop });

//   return (
//     <Box sx={{ p: 3, height: '90vh', backgroundColor: '#F2F6FF' }}>
//       <Grid container spacing={2} sx={{ height: '100%' }}>
//         <Grid item xs={12} sm={4} sx={{ height: '100%', overflow: 'hidden' }}>
//           <Paper elevation={3}>
//             <List>
//               {chats.map((chat) => (
//                 <ListItem
//                   key={chat.id}
//                   button
//                   onClick={() => handleChatClick(chat)}
//                   sx={{
//                     backgroundColor: chat === selectedChat ? '#E0E7FF' : 'inherit',
//                     transition: 'background-color 0.3s',
//                     '&:hover': {
//                       backgroundColor: '#E0E7FF',
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar alt={chat.name} src={`https://avatars.dicebear.com/api/human/${chat.id}.svg`} />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={chat.name}
//                     secondary={chat.messages[chat.messages.length - 1]?.content || 'No messages'}
//                     primaryTypographyProps={{
//                       fontWeight: chat === selectedChat ? 'bold' : 'inherit',
//                       color: chat === selectedChat ? '#3366FF' : 'inherit',
//                     }}
//                   />
//                   <Typography variant="caption" color="text.secondary">
//                     {chat.messages[chat.messages.length - 1]?.timestamp || ''}
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={8}>
//           <Grid container spacing={2} sx={{ height: '100%' }}>
//             <Grid item xs={12} sm={selectedChat ? 8 : 12}>
//               <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                 <Box
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     alignItems: 'center',
//                     boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//                     backgroundColor: '#FFFFFF',
//                   }}
//                 >
//                   {selectedChat ? (
//                     <>
//                       <IconButton onClick={handleBackClick}>
//                         <ArrowBack />
//                       </IconButton>
//                       <Typography variant="h6" color="text.secondary">
//                         {selectedChat.name}
//                       </Typography>
//                     </>
//                   ) : (
//                     <Typography variant="h6" color="text.secondary">
//                       Select a chat to start messaging
//                     </Typography>
//                   )}
//                 </Box>
//                 <Divider />
//                 <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto', height: '60vh' }}>
//                   {/* Chat messages */}
//                   <Box sx={{ display: selectedChat ? 'flex' : 'none', flexDirection: 'column', gap: '8px' }}>
//                     {messages.map((message) => (
//                       <Box
//                         key={message.id}
//                         sx={{
//                           alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                           backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
//                           borderRadius: '8px',
//                           p: 2,
//                           maxWidth: '70%',
//                         }}
//                       >
//                         <Typography variant="body1">{message.content}</Typography>
//                         <Typography variant="caption" color="text.secondary">
//                           {message.timestamp}
//                         </Typography>
//                       </Box>
//                     ))}
//                     {messages.length === 0 && (
//                       <Typography variant="h6" color="text.secondary">
//                         Please select a chat to start messaging
//                       </Typography>
//                     )}
//                   </Box>
//                 </Box>
//                 <Divider />
//                 <Box sx={{ p: 2 }}>
//                   {selectedChat && (
//                     <form onSubmit={handleSendMessage}>
//                       <Box
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '8px',
//                           boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//                           backgroundColor: '#FFFFFF',
//                           padding: '4px',
//                           borderRadius: '4px',
//                         }}
//                       >
//                         <IconButton component="label">
//                           <AttachFile />
//                           <input type="file" hidden {...getInputProps()} />
//                         </IconButton>
//                         <TextField
//                           name="message"
//                           placeholder="Type your message..."
//                           variant="outlined"
//                           fullWidth
//                           size="small"
//                         />
//                         <IconButton type="submit">
//                           <Send />
//                         </IconButton>
//                       </Box>
//                     </form>
//                   )}
//                 </Box>
//               </Paper>
//             </Grid>
//             {selectedUserDetails && (
//               <Grid item xs={12} sm={4}>
//                 <Paper
//                   elevation={3}
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//                 >
//                   <Box sx={{ p: 2 }}>
//                     <Avatar
//                       alt={selectedChat?.name}
//                       src={`https://avatars.dicebear.com/api/human/${selectedChat?.id}.svg`}
//                       sx={{ width: 100, height: 100 }}
//                     />
//                   </Box>
//                   <Typography variant="h6" color="text.secondary">
//                     {selectedUserDetails.about}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     From
//                   </Typography>
//                   <Typography variant="body1">{selectedUserDetails.location}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     On Kati since
//                   </Typography>
//                   <Typography variant="body1">{selectedUserDetails.joined}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Rating
//                   </Typography>
//                   <Typography variant="body1">
//                     {selectedUserDetails.rating} ({selectedUserDetails.ratingCount})
//                   </Typography>
//                 </Paper>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         message="Please enter a message"
//       />
//     </Box>
//   );
// };

// export default ChatComponent;

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Grid,
//   Typography,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
//   Divider,
//   Paper,
//   IconButton,
//   TextField,
//   Snackbar,
//   Toolbar,
//   AppBar,
//   InputAdornment,
//   Badge,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Menu,
//   MenuItem,
//   ListItemIcon,
//   CircularProgress,
// } from '@mui/material';
// import { Chat, ArrowBack, AttachFile, Send, Search, Mic, EmojiEmotions, MoreVert,PhotoLibraryOutlined,InsertDriveFile } from '@mui/icons-material';
// import { useDropzone } from 'react-dropzone';
// import FolderIcon from '@mui/icons-material/Folder';

// const ChatComponent = () => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [selectedUserDetails, setSelectedUserDetails] = useState(null);
//   const [attachments, setAttachments] = useState([]);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [mediaDialogOpen, setMediaDialogOpen] = useState(false);
//   const [filesDialogOpen, setFilesDialogOpen] = useState(false);

  // const chats = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     messages: [
  //       { id: 1, content: 'Hello, I have a question about my order.', timestamp: '10:30 AM', sender: 'user' },
  //       // Add more messages for John Doe
  //     ],
  //     details: {
  //       about: 'About John Doe',
  //       location: 'Canada',
  //       joined: 'On Kati since Jul 2020',
  //       rating: '5',
  //       ratingCount: '10',
  //       media: [
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //       ],
  //       files: [
  //         { name: 'Document.pdf', size: '2.3 MB' },
  //         { name: 'Image.jpg', size: '1.8 MB' },
  //         { name: 'Presentation.ppt', size: '5.6 MB' },
  //       ],
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     messages: [
  //       { id: 1, content: 'Hi, I need help with my website design.', timestamp: 'Yesterday', sender: 'user' },
  //       // Add more messages for Jane Smith
  //     ],
  //     details: {
  //       about: 'About Jane Smith',
  //       location: 'United States',
  //       joined: 'On Kati since Jan 2021',
  //       rating: '4.7',
  //       ratingCount: '15',
  //       media: [
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //       ],
  //       files: [
  //         { name: 'Document.pdf', size: '2.3 MB' },
  //         { name: 'Image.jpg', size: '1.8 MB' },
  //         { name: 'Presentation.ppt', size: '5.6 MB' },
  //       ],
  //     },
  //   },
  //   // Add more chats here
  //   {
  //     id: 3,
  //     name: 'Alice Johnson',
  //     messages: [
  //       { id: 1, content: 'Hey, can you assist me with my account issue?', timestamp: '10:15 AM', sender: 'user' },
  //       // Add more messages for Alice Johnson
  //     ],
  //     details: {
  //       about: 'About Alice Johnson',
  //       location: 'Australia',
  //       joined: 'On Kati since Mar 2022',
  //       rating: '4.2',
  //       ratingCount: '8',
  //       media: [
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //       ],
  //       files: [
  //         { name: 'Document.pdf', size: '2.3 MB' },
  //         { name: 'Image.jpg', size: '1.8 MB' },
  //         { name: 'Presentation.ppt', size: '5.6 MB' },
  //       ],
  //     },
  //   },
  //   // Add more chats here
  // ];

//   useEffect(() => {
//     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
//     setMessages(storedMessages);
//     setLoading(false);
//   }, []);

//   const saveMessagesToLocalStorage = (messages) => {
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//   };

//   const handleChatClick = (chat) => {
//     setSelectedChat(chat);
//     setMessages(chat.messages);
//     setSelectedUserDetails(chat.details);
//   };

//   const handleBackClick = () => {
//     setSelectedChat(null);
//     setMessages([]);
//     setSelectedUserDetails(null);
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const messageContent = e.target.message.value.trim();
//     if (messageContent !== '') {
//       const newMessage = {
//         id: messages.length + 1,
//         content: messageContent,
//         timestamp: new Date().toLocaleTimeString(),
//         sender: 'user',
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       saveMessagesToLocalStorage([...messages, newMessage]);
//       e.target.message.value = '';

//       // Simulate auto-response after a short delay
//       setTimeout(() => {
//         const autoResponse = {
//           id: messages.length + 2,
//           content:
//             'Thank you for getting in touch! We are currently offline and will respond to your query once we are back online at 6 AM. Thank you.',
//           timestamp: new Date().toLocaleTimeString(),
//           sender: 'bot',
//         };
//         setMessages((prevMessages) => [...prevMessages, autoResponse]);
//         saveMessagesToLocalStorage([...messages, autoResponse]);
//       }, 1000); // Adjust the delay as needed
//     } else {
//       setSnackbarOpen(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   const handleAttachmentDrop = (acceptedFiles) => {
//     setAttachments((prevAttachments) => [...prevAttachments, acceptedFiles]);
//   };

//   const handleMenuOpen = (event) => {
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchorEl(null);
//   };

//   const handleMediaDialogOpen = () => {
//     setMediaDialogOpen(true);
//   };

//   const handleMediaDialogClose = () => {
//     setMediaDialogOpen(false);
//   };

//   const handleFilesDialogOpen = () => {
//     setFilesDialogOpen(true);
//   };

//   const handleFilesDialogClose = () => {
//     setFilesDialogOpen(false);
//   };

//   const handleSearchTextChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleAttachmentDrop });

//   const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchText.toLowerCase()));

//   const formatFileSize = (sizeInBytes) => {
//     const kilobyte = 1024;
//     const megabyte = kilobyte * 1024;
//     const gigabyte = megabyte * 1024;

//     if (sizeInBytes >= gigabyte) {
//       return `${(sizeInBytes / gigabyte).toFixed(2)} GB`;
//     } else if (sizeInBytes >= megabyte) {
//       return `${(sizeInBytes / megabyte).toFixed(2)} MB`;
//     } else if (sizeInBytes >= kilobyte) {
//       return `${(sizeInBytes / kilobyte).toFixed(2)} KB`;
//     } else {
//       return `${sizeInBytes} B`;
//     }
//   };

//   return (
//     <Box sx={{ p: 3, height: '100vh', backgroundColor: '#F2F6FF' }}>
//       <AppBar position="static" elevation={0} color="inherit" sx={{ mb: 2 }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={handleBackClick}>
//             <ArrowBack />
//           </IconButton>
//           {selectedChat ? (
//             <Box sx={{ flexGrow: 1 }}>
//               <Typography variant="h6" color="text.secondary">
//                 {selectedChat.name}
//               </Typography>
//               <Typography variant="subtitle2" color="text.secondary">
//                 Online
//               </Typography>
//             </Box>
//           ) : (
//             <Typography variant="h6" color="text.secondary">
//               Messages
//             </Typography>
//           )}
//           {selectedChat && (
//             <>
//               <IconButton color="inherit" onClick={handleMediaDialogOpen}>
//                 <Badge badgeContent={selectedUserDetails.media.length} color="secondary">
//                   <PhotoLibraryOutlined />
//                 </Badge>
//               </IconButton>
//               <IconButton color="inherit" onClick={handleFilesDialogOpen}>
//                 <Badge badgeContent={selectedUserDetails.files.length} color="secondary">
//                   <FolderIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton color="inherit" onClick={handleMenuOpen}>
//                 <MoreVert />
//               </IconButton>
//               <Menu
//                 anchorEl={menuAnchorEl}
//                 open={Boolean(menuAnchorEl)}
//                 onClose={handleMenuClose}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//               >
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <Chat fontSize="small" />
//                   </ListItemIcon>
//                   <ListItemText primary="Mute Notifications" />
//                 </MenuItem>
//               </Menu>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       <Grid container spacing={2} sx={{ height: 'calc(100% - 56px)' }}>
//         <Grid item xs={12} sm={4} sx={{ height: '100%', overflow: 'hidden' }}>
//           <Paper elevation={3} sx={{ height: '100%' }}>
//             <Box sx={{ p: 2 }}>
//               <TextField
//                 placeholder="Search"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 value={searchText}
//                 onChange={handleSearchTextChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Search />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Box>
//             <Divider />
//             <List sx={{ flexGrow: 1 }}>
//               {filteredChats.map((chat) => (
//                 <ListItem
//                   key={chat.id}
//                   button
//                   onClick={() => handleChatClick(chat)}
//                   sx={{
//                     backgroundColor: chat === selectedChat ? '#E0E7FF' : 'inherit',
//                     transition: 'background-color 0.3s',
//                     '&:hover': {
//                       backgroundColor: '#E0E7FF',
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar alt={chat.name} src={`https://avatars.dicebear.com/api/human/${chat.id}.svg`} />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={chat.name}
//                     secondary={chat.messages[chat.messages.length - 1]?.content || 'No messages'}
//                     primaryTypographyProps={{
//                       fontWeight: chat === selectedChat ? 'bold' : 'inherit',
//                       color: chat === selectedChat ? '#3366FF' : 'inherit',
//                     }}
//                   />
//                   <Typography variant="caption" color="text.secondary">
//                     {chat.messages[chat.messages.length - 1]?.timestamp || ''}
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={8}>
//           <Grid container spacing={2} sx={{ height: '100%' }}>
//             <Grid item xs={12} sm={selectedChat ? 8 : 12}>
//               <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                 <Box
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     alignItems: 'center',
//                     boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//                     backgroundColor: '#FFFFFF',
//                   }}
//                 >
//                   {selectedChat ? (
//                     <>
//                       <IconButton color="inherit">
//                         <EmojiEmotions />
//                       </IconButton>
//                       <IconButton color="inherit" onClick={handleAttachmentDrop}>
//                         <AttachFile />
//                       </IconButton>
//                       <TextField
//                         name="message"
//                         placeholder="Type a message"
//                         variant="outlined"
//                         fullWidth
//                         size="small"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               <IconButton type="submit" color="primary">
//                                 <Send />
//                               </IconButton>
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </>
//                   ) : (
//                     <Typography variant="subtitle1">Select a chat to start messaging</Typography>
//                   )}
//                 </Box>
//                 <Divider />
//                 <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto', height: '60vh' }}>
//                   {/* Chat messages */}
//                   <Box
//                     sx={{ display: selectedChat ? 'flex' : 'none', flexDirection: 'column', gap: '8px' }}
//                   >
//                     {messages.map((message) => (
//                       <Box
//                         key={message.id}
//                         sx={{
//                           alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                           backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
//                           borderRadius: '8px',
//                           p: 2,
//                           maxWidth: '70%',
//                         }}
//                       >
//                         <Typography variant="body1">{message.content}</Typography>
//                         <Typography variant="caption" color="text.secondary">
//                           {message.timestamp}
//                         </Typography>
//                       </Box>
//                     ))}
//                     {messages.length === 0 && (
//                       <Typography variant="subtitle2" color="text.secondary">
//                         No messages
//                       </Typography>
//                     )}
//                   </Box>
//                 </Box>
//               </Paper>
//             </Grid>
//             {selectedUserDetails && (
//               <Grid item xs={12} sm={4}>
//                 <Paper
//                   elevation={3}
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//                 >
//                   <Box sx={{ p: 2 }}>
//                     <Avatar
//                       alt={selectedChat?.name}
//                       src={`https://avatars.dicebear.com/api/human/${selectedChat?.id}.svg`}
//                       sx={{ width: 100, height: 100 }}
//                     />
//                   </Box>
//                   <Typography variant="h6" color="text.secondary">
//                     {selectedUserDetails.about}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     From
//                   </Typography>
//                   <Typography variant="body1">{selectedUserDetails.location}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     On Kati since
//                   </Typography>
//                   <Typography variant="body1">{selectedUserDetails.joined}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Rating
//                   </Typography>
//                   <Typography variant="body1">
//                     {selectedUserDetails.rating} ({selectedUserDetails.ratingCount})
//                   </Typography>
//                   <Box sx={{ mt: 2 }}>
//                     <Button variant="outlined" startIcon={<PhotoLibraryOutlined  />} onClick={handleMediaDialogOpen}>
//                       Shared Media
//                     </Button>
//                   </Box>
//                   <Box sx={{ mt: 1 }}>
//                     <Button variant="outlined" startIcon={<InsertDriveFile />} onClick={handleFilesDialogOpen}>
//                       Shared Files
//                     </Button>
//                   </Box>
//                 </Paper>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         message="Please enter a message"
//       />
//       <Dialog open={mediaDialogOpen} onClose={handleMediaDialogClose}>
//         <DialogTitle>Shared Media</DialogTitle>
//         <DialogContent>
//           {selectedUserDetails && selectedUserDetails.media && selectedUserDetails.media.length === 0 ? (
//             <Typography>No shared media available.</Typography>
//           ) : (
//             <Grid container spacing={1}>
//               {selectedUserDetails &&
//                 selectedUserDetails.media &&
//                 selectedUserDetails.media.map((media, index) => (
//                   <Grid item key={index}>
//                     <img src={media} alt="Media" width={150} />
//                   </Grid>
//                 ))}
//             </Grid>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleMediaDialogClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//       <Dialog open={filesDialogOpen} onClose={handleFilesDialogClose}>
//         <DialogTitle>Shared Files</DialogTitle>
//         <DialogContent>
//           {selectedUserDetails && selectedUserDetails.files && selectedUserDetails.files.length === 0 ? (
//             <Typography>No shared files available.</Typography>
//           ) : (
//             <List>
//               {selectedUserDetails &&
//                 selectedUserDetails.files &&
//                 selectedUserDetails.files.map((file, index) => (
//                   <ListItem key={index}>
//                     <ListItemIcon>
//                       <InsertDriveFile />
//                     </ListItemIcon>
//                     <ListItemText primary={file.name} secondary={formatFileSize(file.size)} />
//                   </ListItem>
//                 ))}
//             </List>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleFilesDialogClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//       {loading && (
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(255, 255, 255, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ChatComponent;






import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Paper,
  IconButton,
  TextField,
  Snackbar,
} from '@mui/material';
import { Chat, ArrowBack, AttachFile, Send, Search, Mic, EmojiEmotions, MoreVert } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const ChatComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Your chat data
  // ...
  const chats = [
    {
      id: 1,
      name: 'John Doe',
      messages: [
        { id: 1, content: 'Hello, I have a question about my order.', timestamp: '10:30 AM', sender: 'user' },
        // Add more messages for John Doe
      ],
      details: {
        about: 'About John Doe',
        location: 'Canada',
        joined: 'On Kati since Jul 2020',
        rating: '5',
        ratingCount: '10',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      messages: [
        { id: 1, content: 'Hi, I need help with my website design.', timestamp: 'Yesterday', sender: 'user' },
        // Add more messages for Jane Smith
      ],
      details: {
        about: 'About Jane Smith',
        location: 'United States',
        joined: 'On Kati since Jan 2021',
        rating: '4.7',
        ratingCount: '15',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 3,
      name: 'Alice Johnson',
      messages: [
        { id: 1, content: 'Hey, can you assist me with my account issue?', timestamp: '10:15 AM', sender: 'user' },
        // Add more messages for Alice Johnson
      ],
      details: {
        about: 'About Alice Johnson',
        location: 'Australia',
        joined: 'On Kati since Mar 2022',
        rating: '4.2',
        ratingCount: '8',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    // Add more chats here
    // ...
    {
      id: 21,
      name: 'Random User 1',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'About Random User 1',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 5,
      name: 'Tate',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'Tate',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 6,
      name: 'Abdul',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'Abdul',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/160',
          'https://via.placeholder.com/160',
          'https://via.placeholder.com/160',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 12,
      name: 'Junejo',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'Junejo',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 8,
      name: 'Ukhano',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'Ukhano',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 9,
      name: 'Moroo',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'Moroo',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    {
      id: 10,
      name: 'Ganjiswag',
      messages: [
        { id: 1, content: 'Hello!', timestamp: '12:00 PM', sender: 'user' },
        { id: 2, content: 'Hi there!', timestamp: '12:01 PM', sender: 'bot' },
      ],
      details: {
        about: 'Ganjiswag',
        location: 'Unknown',
        joined: 'On Kati since Jan 2023',
        rating: '4.8',
        ratingCount: '5',
        media: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
        files: [
          { name: 'Document.pdf', size: '2.3 MB' },
          { name: 'Image.jpg', size: '1.8 MB' },
          { name: 'Presentation.ppt', size: '5.6 MB' },
        ],
      },
    },
    // Add more chats here
    // ...
  ];
  

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    setMessages(storedMessages);
  }, []);

  const saveMessagesToLocalStorage = (messages) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    setMessages(chat.messages);
    setSelectedUserDetails(chat.details);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
    setMessages([]);
    setSelectedUserDetails(null);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageContent = e.target.message.value.trim();
    if (messageContent !== '') {
      const newMessage = {
        id: messages.length + 1,
        content: messageContent,
        timestamp: new Date().toLocaleTimeString(),
        sender: 'user',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      saveMessagesToLocalStorage([...messages, newMessage]);
      e.target.message.value = '';

      // Simulate auto-response after a short delay
      setTimeout(() => {
        const autoResponse = {
          id: messages.length + 2,
          content:
            'Thank you for getting in touch! We are currently offline and will respond to your query once we are back online at 6 AM. Thank you.',
          timestamp: new Date().toLocaleTimeString(),
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, autoResponse]);
        saveMessagesToLocalStorage([...messages, autoResponse]);
      }, 1000); // Adjust the delay as needed
    } else {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAttachmentDrop = (acceptedFiles) => {
    setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleAttachmentDrop });

  return (
    <Box sx={{ p: 3, height: '90vh', backgroundColor: '#F2F6FF' }}>
      <Grid container spacing={2} sx={{ height: '100%', flexWrap: 'wrap' }}>
        <Grid item xs={12} sm={4} sx={{ height: '100%', overflow: 'hidden' }}>
          <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
              <TextField
                placeholder='Search'
                variant='outlined'
                size='small'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton edge='start' color='inherit'>
                      <Search />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Divider />
            <List sx={{ overflow:'scroll'}}>
              {chats.map((chat) => (
                <ListItem
                  key={chat.id}
                  button
                  onClick={() => handleChatClick(chat)}
                  sx={{
                    backgroundColor: chat === selectedChat ? '#E0E7FF' : 'inherit',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      backgroundColor: '#E0E7FF',
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={chat.name} src={`https://avatars.dicebear.com/api/human/${chat.id}.svg`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={chat.name}
                    secondary={chat.messages[chat.messages.length - 1]?.content || 'No messages'}
                    primaryTypographyProps={{
                      fontWeight: chat === selectedChat ? 'bold' : 'inherit',
                      color: chat === selectedChat ? '#3366FF' : 'inherit',
                    }}
                  />
                  <Typography variant='caption' color='text.secondary'>
                    {chat.messages[chat.messages.length - 1]?.timestamp || ''}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2} sx={{ height: '100%', flexWrap: 'nowrap' }}>
            {selectedChat ? (
              <Grid item xs={12} sm={8}>
                <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 2,
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        alt={selectedChat?.name}
                        src={`https://avatars.dicebear.com/api/human/${selectedChat?.id}.svg`}
                      />
                      <Typography variant='h6' color='text.secondary' sx={{ ml: 2 }}>
                        {selectedChat ? selectedChat.name : ''}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <Chat />
                      </IconButton>
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
                    {/* Chat messages */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                      {messages.map((message) => (
                        <Box
                          key={message.id}
                          sx={{
                            alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                            backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
                            borderRadius: '8px',
                            p: 2,
                            maxWidth: '80%', // Adjust the maximum width of the messages container
                          }}
                        >
                          <Typography variant='body1'>{message.content}</Typography>
                          <Typography variant='caption' color='text.secondary'>
                            {message.timestamp}
                          </Typography>
                        </Box>
                      ))}
                      {messages.length === 0 && (
                        <Typography variant='h6' color='text.secondary'>
                          Please select a chat to start messaging
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    {selectedChat && (
                      <form onSubmit={handleSendMessage}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                            backgroundColor: '#FFFFFF',
                            padding: '4px',
                            borderRadius: '4px',
                          }}
                        >
                          <IconButton component='label'>
                            <AttachFile />
                            <input type='file' hidden {...getInputProps()} />
                          </IconButton>
                          <TextField name='message' placeholder='Type your message...' variant='outlined' fullWidth size='small' />
                          <IconButton type='submit'>
                            <Send />
                          </IconButton>
                        </Box>
                      </form>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ) : (
              <Grid item xs={12} sm={8}>
                <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant='h5' color='text.secondary' gutterBottom>
                    Select a chat to start messaging
                  </Typography>
                  <EmojiEmotions color='primary' sx={{ fontSize: 80 }} />
                </Paper>
              </Grid>
            )}

            {selectedChat && selectedUserDetails && (
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar alt={selectedChat.name} src={`https://avatars.dicebear.com/api/human/${selectedChat.id}.svg`} sx={{ width: 100, height: 100, mb: 2 }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {selectedChat.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedUserDetails.about}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      Location: {selectedUserDetails.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Joined: {selectedUserDetails.joined}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      Rating: {selectedUserDetails.rating} ({selectedUserDetails.ratingCount} ratings)
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Media
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                      {selectedUserDetails.media.map((mediaUrl, index) => (
                        <Avatar key={index} alt={`Media ${index + 1}`} src={mediaUrl} sx={{ width: 40, height: 40 }} />
                      ))}
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Files
                    </Typography>
                    <List>
                      {selectedUserDetails.files.map((file, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={file.name} secondary={`Size: ${file.size}`} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Paper>
              </Grid>
            )}
            
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message='Please enter a message'
      />
    </Box>
  );
};

export default ChatComponent;
