import * as React from 'react';
import { useState } from 'react';
import { Stack, Box, Button, Typography, Paper, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { postLogin } from '../../Utilities/dbUtil';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/joy/CircularProgress';

export default function Login(props) {

    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [incorrect, setIncorrect] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [waitingResponse, setWaitingResponse] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const setCookies = (username, pn, token) => {
        props.setCookies('username', username);
        props.setCookies('pn', pn);
        props.setCookies('token', token);
    }
    return (
        <Box>
            <Paper variant="elevation" elevation={3} sx={{ height: "100%", width: "90%", margin: "auto", }}>
                <Stack spacing={7} sx={{ width: "100%", height: "100%", alignItems: "center", marginTop: "50%", paddingTop: "35px", paddingBottom: "35px" }}>
                    <Stack direction="row">
                        <EmojiEventsIcon sx={{ color: "gold", height: "50px", width: "50px" }}></EmojiEventsIcon>
                        <Typography variant='h4' color={"primary"} sx={{ paddingTop: "5px" }}>
                            trophi
                        </Typography>
                    </Stack>

                    <TextField id="username" label="Username" variant="outlined" onChange={(e) => { setUsername(e.target.value.toLowerCase()) }} />
                    <OutlinedInput onChange={(e) => { setPassword(e.target.value) }}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{ width: '22ch' }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {
                        !waitingResponse &&
                        <Button variant="contained" startIcon={<LoginIcon />} onClick={(e) => {
                            setWaitingResponse(true);
                            postLogin(username, password).then(result => {
                                if (result == "User doesn't exist or password is incorrect.") {
                                    setWaitingResponse(false);
                                    setIncorrect(true);
                                } else {
                                    setCookies(result.user, result.pn, result.token);
                                }
                            });
                        }}>
                            Login
                        </Button >
                    }
                    {waitingResponse && <CircularProgress variant="solid" />}
                    <Alert severity="info" sx={{ marginTop: "10%", transition: "0.2s", opacity: incorrect ? 1 : 0 }}>WOMP WOMP. Wrong username or password.</Alert>
                </Stack>
            </Paper>
        </Box>

    );
}  