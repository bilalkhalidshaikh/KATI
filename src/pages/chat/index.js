import React, { useState } from 'react';
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
} from '@mui/material';
import { Chat, ArrowBack } from '@mui/icons-material';

const ChatComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Hello, I have a question about my order.',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      name: 'Jane Smith',
      message: 'Hi, I need help with my website design.',
      timestamp: 'Yesterday',
    },
    // Add more chat data here
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      {!selectedChat ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
              <List>
                {chats.map((chat) => (
                  <ListItem
                    key={chat.id}
                    button
                    onClick={() => handleChatClick(chat)}
                    sx={{ backgroundColor: chat === selectedChat ? '#f5f5f5' : 'inherit' }}
                  >
                    <ListItemAvatar>
                      <Avatar alt={chat.name} src={`/avatars/${chat.id}.jpg`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={chat.name}
                      secondary={chat.message}
                      primaryTypographyProps={{ fontWeight: chat === selectedChat ? 'bold' : 'inherit' }}
                    />
                    <Typography variant='caption' color='text.secondary'>
                      {chat.timestamp}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper sx={{ height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h6' color='text.secondary'>
                Select a chat to start messaging
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handleBackClick}>
                  <ArrowBack />
                </IconButton>
                <Typography variant='h6' color='text.secondary'>
                  {selectedChat.name}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
                {/* Chat messages */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Box sx={{ alignSelf: 'flex-start', backgroundColor: '#f5f5f5', borderRadius: '8px', p: 2 }}>
                    <Typography variant='body1'>Hello, how can I assist you?</Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {selectedChat.timestamp}
                    </Typography>
                  </Box>
                  {/* Add more chat messages here */}
                </Box>
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <TextField
                  placeholder='Type your message...'
                  variant='outlined'
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <Chat />
                      </IconButton>
                    ),
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper sx={{ height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h6' color='text.secondary'>
                Chat UI will show here
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ChatComponent;