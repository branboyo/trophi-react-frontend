import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

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
        // If we iterate from 0, then we would want to save this session date. If the app persists to the next day, we reset back to 0 (SessionFirstRun component).
        if(currentStage == 0) {
            props.setCurrentSessionDate(new Date(Date.now()));
        }
        
        setCurrentStage(currentStage + 1);

    }

    const cycleStage = () => {
        setCurrentStage(1);
    }
    
    useEffect(() => {
        const currentDate = new Date(Date.now());
        if (props.currentSessionDate !== undefined) {
            const origMonth = props.currentSessionDate.getUTCMonth() + 1; // Months from 1-12
            const origDay = props.currentSessionDate.getUTCDate();
            const origYear = props.currentSessionDate.getUTCFullYear();

            const month = currentDate.getUTCMonth() + 1;
            const day = currentDate.getUTCDate();
            const year = currentDate.getUTCFullYear();

            // Reset the stage to SessionFirstRun and currentSessionDate to today
            if(origMonth !== month || origDay !== day || origYear !== year) {
                setCurrentStage(0);
                props.setCurrentSessionDate(currentDate);
            }
        }
    })

    return (
        <Box sx={{height: "calc(100vh-56px)"}}>

            <Box style={
            currentStage !== 0 ? { display: 'none' } : {display: 'inherit'}}>
                <SessionFirstRun iterateStage = {iterateStage} setCurrentExercise={setCurrentExercise} currentExercise={currentExercise} cookies={props.cookies}/>
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
                <ExercisePrompt iterateStage = {cycleStage} setCurrentExercise={setCurrentExercise} currentExercise={currentExercise} cookies={props.cookies}/>
            </Box>
            
        </Box>
    );
}  