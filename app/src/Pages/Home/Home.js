import * as React from 'react';
import { useState, useEffect } from 'react';
import BottomNavigationComponent from "../../Components/BottomNavigation/BottomNavigationComponent"
import { Box, Container, CssBaseline, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { useCookies } from 'react-cookie'
import Log from '../Log/Log';
import Session from '../Session/Session';
import Login from '../Login/Login';

export default function Home() {

    const [currentPage, setCurrentPage] = useState(1)
    const [cookies, setCookies] = useCookies(['token', 'username', 'pn']);
    // State used for date persistence when Log toggles on and off
    const [currentLogDate, setCurrentLogDate] = useState(dayjs());
    
    useEffect(() => {
        const cookie = cookies.token;
        if(cookie == undefined) {
            setCurrentPage(-1)
        } else {
            console.log(cookie)
            setCurrentPage(1);
        }
    }, [cookies])

    return (
        <Container maxWidth='sm' sx={{ padding: 0 }}>
            <Box sx={{ bgcolor: '', height: '100vh', width: '100vw'}} style={currentPage !== -1 ? { display: 'none' } : { display: 'initial' }} elevation={4}>
                
            </Box>
            <CssBaseline />
            <Box sx={{ bgcolor: '', height: '100%', width: '100%' }}>
                <Box style={currentPage !== 0 ? { display: 'none' } : { display: 'initial' }}>
                    <Log setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate} currentPage={currentPage}/>
                </Box>
                <Box style={currentPage !== 1 ? { display: 'none' } : { display: 'initial' }}>
                    <Session setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate} />
                </Box>

                <Box style={currentPage !== -1 ? { display: 'none' } : { display: 'initial' }}>
                    <Login setCookies={setCookies}/>
                </Box>

                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} style={currentPage == -1 ? { display: 'none' } : { display: 'initial' }}>
                    {/* Page changes based on BottomNavigationComponent selection */}
                    <BottomNavigationComponent setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </Paper>
            </Box>
        </Container>

    )
}