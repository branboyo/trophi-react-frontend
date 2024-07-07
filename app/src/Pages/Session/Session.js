import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IconButton, Box, Modal, Typography, Button } from '@mui/material';

import SessionTimeline from '../../Components/LogComponents/SessionTimeline/SessionTimeline';
import SessionFirstRun from '../../Components/SessionComponents/SessionFirstRun/SessionFirstRun';
import TimerSet from '../../Components/SessionComponents/TimerSet/TimerSet';
import Timer from '../../Components/SessionComponents/Timer/Timer';
import ExercisePrompt from '../../Components/SessionComponents/ExercisePrompt/ExercisePrompt';

export default function Session(props) {
    const [currentStage, setCurrentStage] = useState(0);
    const [minutePicker, setMinutePicker] = useState({ minutes: 3 });
    const [secondPicker, setSecondPicker] = useState({ seconds: 0 });
    const [currentExercise, setCurrentExercise] = useState("");
    const [timerValue, setTimerValue] = useState({ min: 0, sec: 0, hundreth: 0 });
    

    const iterateStage = () => {
        setCurrentStage(currentStage + 1);
    }

    const cycleStage = () => {
        setCurrentStage(1);
    }
    
    return (
        <Box sx={{height: "calc(100vh-56px)"}}>

            <Box style={
            currentStage !== 0 ? { display: 'none' } : {display: 'inherit'}}>
                <SessionFirstRun iterateStage = {iterateStage} setCurrentExercise={setCurrentExercise} currentExercise={currentExercise}/>
            </Box>

            <Box style={
            currentStage !== 1 ? { display: 'none' } : {display: 'inherit'}}>
                <TimerSet iterateStage = {iterateStage} minutePicker={minutePicker} secondPicker={secondPicker} setMinutePicker={setMinutePicker} setSecondPicker={setSecondPicker} setTimerValue={setTimerValue}/>
            </Box>

            { currentStage == 2 && <Box style={{display: 'inherit'}}>
                <Timer iterateStage = {iterateStage} minutePicker={minutePicker} secondPicker={secondPicker} timerValue={timerValue}/>
            </Box>}

            <Box style={
            currentStage !== 3 ? { display: 'none' } : {display: 'inherit'}}>
                <ExercisePrompt iterateStage = {cycleStage} setCurrentExercise={setCurrentExercise} currentExercise={currentExercise}/>
            </Box>
            
        </Box>
    );
}  