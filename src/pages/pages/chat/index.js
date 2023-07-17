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
// import { Chat, ArrowBack, AttachFile } from '@mui/icons-material';
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
//                 <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
//                   {/* Chat messages */}
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                     {messages.length > 0 ? (
//                       messages.map((message) => (
//                         <Box
//                           key={message.id}
//                           sx={{
//                             alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                             backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
//                             borderRadius: '8px',
//                             p: 2,
//                             maxWidth: '70%',
//                           }}
//                         >
//                           <Typography variant="body1">{message.content}</Typography>
//                           <Typography variant="caption" color="text.secondary">
//                             {message.timestamp}
//                           </Typography>
//                         </Box>
//                       ))
//                     ) : (
//                       <Typography variant="h6" color="text.secondary">
//                         Chat UI will show here
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
//                           <Chat />
//                         </IconButton>
//                       </Box>
//                     </form>
//                   )}
//                 </Box>
//               </Paper>
//             </Grid>
//             {selectedUserDetails && (
//               <Grid item xs={12} sm={4}>
//                 <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
import { Chat, ArrowBack, AttachFile } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const ChatComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
      },
    },
    // Add more chats here
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
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12} sm={4} sx={{ height: '100%', overflow: 'hidden' }}>
          <Paper elevation={3}>
            <List>
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
                  <Typography variant="caption" color="text.secondary">
                    {chat.messages[chat.messages.length - 1]?.timestamp || ''}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={12} sm={selectedChat ? 8 : 12}>
              <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {selectedChat ? (
                    <>
                      <IconButton onClick={handleBackClick}>
                        <ArrowBack />
                      </IconButton>
                      <Typography variant="h6" color="text.secondary">
                        {selectedChat.name}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="h6" color="text.secondary">
                      Select a chat to start messaging
                    </Typography>
                  )}
                </Box>
                <Divider />
                <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
                  {/* Chat messages */}
                  <Box sx={{ display: selectedChat ? 'flex' : 'none', flexDirection: 'column', gap: '8px' }}>
                    {messages.map((message) => (
                      <Box
                        key={message.id}
                        sx={{
                          alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                          backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#EDEFF1',
                          borderRadius: '8px',
                          p: 2,
                          maxWidth: '70%',
                        }}
                      >
                        <Typography variant="body1">{message.content}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {message.timestamp}
                        </Typography>
                      </Box>
                    ))}
                    {messages.length === 0 && (
                      <Typography variant="h6" color="text.secondary">
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
                        <IconButton component="label">
                          <AttachFile />
                          <input type="file" hidden {...getInputProps()} />
                        </IconButton>
                        <TextField
                          name="message"
                          placeholder="Type your message..."
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                        <IconButton type="submit">
                          <Chat />
                        </IconButton>
                      </Box>
                    </form>
                  )}
                </Box>
              </Paper>
            </Grid>
            {selectedUserDetails && (
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ p: 2 }}>
                    <Avatar
                      alt={selectedChat?.name}
                      src={`https://avatars.dicebear.com/api/human/${selectedChat?.id}.svg`}
                      sx={{ width: 100, height: 100 }}
                    />
                  </Box>
                  <Typography variant="h6" color="text.secondary">
                    {selectedUserDetails.about}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From
                  </Typography>
                  <Typography variant="body1">{selectedUserDetails.location}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    On Kati since
                  </Typography>
                  <Typography variant="body1">{selectedUserDetails.joined}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating
                  </Typography>
                  <Typography variant="body1">
                    {selectedUserDetails.rating} ({selectedUserDetails.ratingCount})
                  </Typography>
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
        message="Please enter a message"
      />
    </Box>
  );
};

export default ChatComponent;

