import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IconButton, Box, Modal, Typography } from '@mui/material';
import SessionTimeline from '../../Components/SessionTimeline/SessionTimeline';
import SessionFirstRun from '../../Components/SessionFirstRun/SessionFirstRun';

export default function Session(props) {
    const [currentStage, setCurrentStage] = useState(0);

    return (
        <Box style={{ display: "unset" }}>
            {currentStage == 0 && <SessionFirstRun />}
        </Box>
    );
}  