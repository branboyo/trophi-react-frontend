import { Box, Typography, Paper } from '@mui/material';
import { MultiSectionDigitalClockSection } from '@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function Timer(props) {
    const [timerMode, setTimerMode] = useState(false);
    // const [minutePicker, setMinutePicker] = useState({ minutes: 3 });
    // const [secondPicker, setSecondPicker] = useState({ seconds: 0 });

    // const minuteSelections = { minutes: [0, 1, 2, 3, 4, 5] }
    // const secondSelections = { seconds: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] }
    // console.log(props.timerValue)
    const runTimer = () => {
        if(!timerMode) {
            props.runTimer(props.minutePicker.minutes, props.secondPicker.seconds);
            setTimerMode(true);
        }
        
    }
    return (
        <Box style={{ display: "flex" }}>
            {/* <Box bgcolor="#1876D1" sx={{ height: "100vh", width: "100vw", margin: "auto" }} /> */}

            <Typography variant="h1"  color={"black"} sx={{ fontSize: "20rem", position: "absolute", marginLeft: "auto", marginRight: "auto", left: "0", right: "0", bottom: "25%", verticalAlign: "middle", textAlign: "center", userSelect: "none" }}>
                {props.timerValue ? (props.timerValue['min'] < 10 ? `0${props.timerValue['min']}` : props.timerValue['min']) : "00"}
            </Typography>

            <Typography variant="h1" color={"black"} sx={{ fontSize: "17rem", transform: "rotate(90deg)", position: "absolute", marginLeft: "auto", marginRight: "auto", left: "0", right: "35%", bottom: "65%", verticalAlign: "middle", textAlign: "center", userSelect: "none" }}>
                {props.timerValue ? (props.timerValue['sec'] < 10 ? `0${props.timerValue['sec']}` : props.timerValue['sec']) : "00"}
            </Typography>

            <Typography variant="h1" color={"black"} sx={{ fontSize: "10rem", position: "absolute", marginLeft: "auto", marginRight: "auto", left: "50%", right: "0", bottom: "70%", verticalAlign: "middle", textAlign: "center", userSelect: "none" }}>
                {props.timerValue ? (props.timerValue['hundreth'] < 10 ? `0${props.timerValue['hundreth']}` : props.timerValue['hundreth']) : "00"}
            </Typography>

            {!timerMode && <PauseIcon sx={{ position: 'absolute', bottom: "10vh", left: "10vw", right: 0, width: "100px", height: "100px", borderRadius: "20%", boxShadow: "0 0 0 5px #0C2F54" }} onClick={() => {runTimer()}} ></PauseIcon>}
            <SkipNextIcon sx={{ position: 'absolute', bottom: "10vh", right: "10vw", width: "100px", height: "100px", borderRadius: "20%", boxShadow: "0 0 0 5px #0C2F54" }} onClick={() => {props.iterateStage()}}></SkipNextIcon>

        </Box>
    );

}
