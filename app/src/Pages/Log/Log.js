import * as React from 'react';
import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IconButton, Box, Modal, Typography } from '@mui/material';
import SessionTimeline from '../../Components/LogComponents/SessionTimeline/SessionTimeline';
import dayjs from 'dayjs';
// import { setTimeout } from "timers/promises";

const style = {
    position: 'absolute',
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '50%',
    width: '80vw%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Log(props) {
    
    // const [calendarToggle, setCalendarToggle] = React.useState(false);
    // const handleCalendarOpen = () => setCalendarToggle(true);
    // const handleCalendarClose = () => setCalendarToggle(false);
    // const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [calendarToggle, setCalendarToggle] = useState(false);
    const handleOpen = () => { setCalendarToggle(true) };
    const handleClose = () => setCalendarToggle(false);
    const [sessionInfo, setSessionInfo] = useState({})
    const [date, setDate] = useState(props.currentLogDate || new Date(dayjs()).toString());

    useEffect(() => {
        const fetchDate = async () => {
            var currentDate = new Date(date);
            console.log(currentDate)
            var dd = String(currentDate.getDate()).padStart(2, '0');
            var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = currentDate.getFullYear();
            var token = props.cookies['token']
            const user = props.cookies['username'];
            if(token !== undefined && user !== undefined) {
                fetch("http://localhost:3001/sessions/session", {method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'userName': user,
                        'queryDate': `${yyyy}-${mm}-${dd}`,
                        'token': token
                    }
                }).then(res => {return res.json();
                }).then(data => {setSessionInfo(data);});
            }
        }
        fetchDate();
        
    }, [date, props.currentPage])

    // Shorten the date string
    const formatDate = (dateInput) => {
        let stringArray = dateInput.split('')
                                   .map((c, i) => (c === ' ') ? i : -1)
                                   .filter((c) => c !== -1);
        return dateInput.substring(stringArray[0], stringArray[3]);
    }

    return (
        <Box style={{ display: "unset", height: "calc(100vh-56px)" }}>
            <IconButton style={{ right: "1%", top: "1%", position: "fixed", zIndex: 1 }} size="large" onClick={handleOpen} >
                <CalendarMonthIcon fontSize="inherit" />
            </IconButton>

            <Modal
                open={calendarToggle}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar sx={{ margin: "auto", position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }} value={date}
                            onChange={
                                (newDate) => {  
                                    setDate(newDate); 

                                    // Date sent back to parent (Home) page to persist the selected date
                                    props.setCurrentLogDate(newDate);
                                    handleClose();
                                }
                            } />
                    </LocalizationProvider>
                </Box>
            </Modal>

            <SessionTimeline 
            exercises = {sessionInfo}
                // exercises={[
                // {
                //     name: "lat pulldowns", sets: [{ weight: 160, reps: 8 }, { weight: 160, reps: 7 }, { weight: 160, reps: 7 }]
                // },
                // {
                //     name: "rows", sets: [{ weight: 160, reps: 8 }, { weight: 160, reps: 7 }, { weight: 160, reps: 7 }]
                // },
                // {
                //     name: "omni grip", sets: [{ weight: 160, reps: 8 }, { weight: 160, reps: 7 }, { weight: 160, reps: 7 }]
                // }]} 
                date = {formatDate(new Date(date).toString())}>
            </SessionTimeline>

        </Box>
    );
}  