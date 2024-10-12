import * as React from 'react';
import { useState } from 'react';
import { Stack, Box, Button, Typography, Paper, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { postLogin } from '../../Utilities/dbUtil';

export default function Login(props) {

    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [incorrect, setIncorrect] = useState(false)
    const setCookies = (username, pn, token) => {
        props.setCookies('username', username);
        props.setCookies('pn', pn);
        props.setCookies('token', token);
    }
    return (
        <Box>
            <Paper variant="elevation" elevation={3} sx={{height: "100%", width: "90%", margin: "auto", }}>
                <Stack spacing={7} sx={{width: "100%", height: "100%", alignItems: "center", marginTop: "50%", paddingTop: "35px", paddingBottom: "35px"}}>
                    <Stack direction="row">
                        <EmojiEventsIcon sx={{color: "gold", height: "50px", width: "50px"}}></EmojiEventsIcon>
                        <Typography variant='h4' color={"primary"} sx={{paddingTop: "5px"}}>
                            trophi
                        </Typography>
                    </Stack>
                    
                    <TextField id="username" label="Username" variant="outlined" onChange={(e)=>{setUsername(e.target.value)}}/>
                    <TextField id="password" label="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Button variant="contained" startIcon={<LoginIcon />} onClick={(e) => {postLogin(username, password).then(result => 
                    {
                        if (result == "User doesn't exist or password is incorrect."){
                            setIncorrect(true);
                        } else {
                            setCookies(result.user, result.pn, result.token);
                        } 
                    });}}>
                        Login
                    </Button >
                    <Alert severity="info" sx={{marginTop: "10%", transition: "0.2s", opacity: incorrect ? 1 : 0}}>WOMP WOMP. Wrong username or password.</Alert>
                </Stack>
            </Paper>            
        </Box>
        
    );
}  