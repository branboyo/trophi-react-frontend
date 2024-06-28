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
    const [timerValue, setTimerValue] = useState({ min: 0, sec: 0, hundreth: 0 });

    const runTimer = (min, sec) => {

        let count = (min * 60 * 100) + (sec * 100)

        setInterval(timer, 10); //10 will run it every 100th of a second

        function timer() {
            let current = count;

            let minHolder = Math.floor(count / (60 * 100));

            current = current - (minHolder * 60 * 100);

            let secHolder = Math.floor(current / 100);

            current = current - secHolder * 100;

            let hundreth = current;

            setTimerValue(
                {
                    min: minHolder,
                    sec: secHolder,
                    hundreth: hundreth
                }
            )

            // console.log("min: ", minHolder, " sec: ", secHolder, " hundreth: ", hundreth)
            if (count <= 0) {
                return;
            }
            count--;
        }

    }

    return (
        <Container maxWidth='sm' sx={{ padding: 0 }}>
            <CssBaseline />
            <Box sx={{ bgcolor: '', height: '100%', width: '100%' }}>
                <Box style={currentPage !== 0 ? { display: 'none' } : { display: 'initial' }}>
                    <Log setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate} />
                </Box>
                <Box style={currentPage !== 1 ? { display: 'none' } : { display: 'initial' }}>
                    <Session setCurrentLogDate={setCurrentLogDate} currentLogDate={currentLogDate} runTimer={runTimer} timerValue={timerValue} setTimerValue={setTimerValue} />
                </Box>

                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    {/* Page changes based on BottomNavigationComponent selection */}
                    <BottomNavigationComponent setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </Paper>
            </Box>
        </Container>

    )
}