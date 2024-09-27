import * as React from 'react';
import { useState, useEffect } from 'react';
import BottomNavigationComponent from "../../Components/BottomNavigation/BottomNavigationComponent"
import { Box, Container, CssBaseline, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { useCookies } from 'react-cookie'

import Log from '../Log/Log';
import Session from '../Session/Session';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

export default function Home() {

    const [currentPage, setCurrentPage] = useState(1)
    const [cookies, setCookies] = useCookies(['token', 'username', 'pn']);
    // State used for date persistence when Log toggles on and off
    const [currentLogDate, setCurrentLogDate] = useState(dayjs());
    // Used to check if the state outlasts the session date -> reset back to "SessionFirstRun" if a new day has passed
    const [currentSessionDate, setCurrentSessionDate] = useState(undefined);
    
    useEffect(() => {
        const cookie = cookies.token;
        if(cookie == undefined) {
            setCurrentPage(-1)
        } else {
            console.log(cookie);
            setCurrentPage(1);
        }
    }, [cookies])

    return (
        <Container maxWidth='sm' sx={{ padding: 0 }}>
            <Box sx={{ bgcolor: '', height: '100vh', width: '100vw'}} style={currentPage !== -1 ? { display: 'none' } : { display: 'initial' }} elevation={4}>
                
            </Box>
            <CssBaseline />
            <Box sx={{ bgcolor: '', height: '100%', width: '100%' }}>
                <Box style={currentPage !== -1 ? { display: 'none' } : { display: 'initial' }}>
                    {/* setCookies is used here so we can set the username, pn, and jwt token after login response */}
                    <Login setCookies={setCookies}/>
                </Box>

                <Box style={currentPage !== 0 ? { display: 'none' } : { display: 'initial' }}>
                    {/* setCurrentLogDate and currentLogDate passed as it is used in Log. Instantiated here to maintain persistence */}
                    {/* Cookies used to direct the API call to the correct user */}
                    {/* currentPage utilized to trigger useEffect - refresh the call for log information (e.g. after logging a new item */}
                    <Log setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate} currentPage={currentPage} cookies={cookies}/>
                </Box>
                
                <Box style={currentPage !== 1 ? { display: 'none' } : { display: 'initial' }}>
                    <Session setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate} cookies={cookies} currentSessionDate={currentSessionDate} setCurrentSessionDate={setCurrentSessionDate}/>
                </Box>

                <Box style={currentPage !== 2 ? { display: 'none' } : { display: 'initial' }}>
                    <Profile></Profile>
                </Box>

                

                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} style={currentPage == -1 ? { display: 'none' } : { display: 'initial' }}>
                    {/* Page changes based on BottomNavigationComponent selection */}
                    <BottomNavigationComponent setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </Paper>
            </Box>
        </Container>

    )
}