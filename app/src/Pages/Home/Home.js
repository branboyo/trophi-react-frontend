import * as React from 'react';
import { useState } from 'react';
import BottomNavigationComponent from "../../Components/BottomNavigation/BottomNavigationComponent"
import { Box, Container, CssBaseline, Paper } from '@mui/material';
import dayjs from 'dayjs';

import Log from '../Log/Log';
import Session from '../Session/Session';

export default function Home() {

    const [currentPage, setCurrentPage] = useState(1)

    // State used for date persistence when Log toggles on and off
    const [currentLogDate, setCurrentLogDate] = useState(dayjs());
    
    return (
        <Container maxWidth='sm'>
            <CssBaseline />
            <Box sx={{ bgcolor: '', height: '100%' }}>
                {currentPage == 0 && <Log setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate}/>}
                {currentPage == 1 && <Session setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate}/>}
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                    {/* Page changes based on BottomNavigationComponent selection */}
                    <BottomNavigationComponent setCurrentPage={setCurrentPage} currentPage={currentPage}/>

                </Paper>
            </Box>
        </Container>
        
    )
}