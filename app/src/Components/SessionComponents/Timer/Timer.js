import { Box, Typography, Paper, Stack, Fab } from '@mui/material';
import { MultiSectionDigitalClockSection } from '@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function Timer(props) {

    const [timerValue, setTimerValue] = useState({ min: 0, sec: 0, hundreth: 0 });
    const [timerMode, setTimerMode] = useState(false);

    // const [minutePicker, setMinutePicker] = useState({ minutes: 3 });
    // const [secondPicker, setSecondPicker] = useState({ seconds: 0 });

    // const minuteSelections = { minutes: [0, 1, 2, 3, 4, 5] }
    // const secondSelections = { seconds: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] }
    // console.log(props.timerValue)

    useEffect(() => {
        console.log("ran")
        setTimerValue(props.timerValue);
    }, [])
    const runTimer = async (min, sec) => {

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

    console.log(timerValue)
    return (
        <Box style={{ display: "flex" }}>
            {/* <Box bgcolor="#1876D1" sx={{ height: "100vh", width: "100vw", margin: "auto" }} /> */}
            <Stack spacing={0} sx={{ marginLeft: "auto", marginRight: "auto" }}>
                <Typography variant="h1" color={"primary"} sx={{ fontSize: "250px", height: "250px", verticalAlign: "middle", textAlign: "center", userSelect: "none" }}>
                    {timerValue ? (timerValue['min'] < 10 ? `0${timerValue['min']}` : timerValue['min']) : "00"}
                </Typography>

                <Typography variant="h1" color={"text.secondary"} sx={{ fontSize: "200px", height: "225px", marginLeft: "auto", marginRight: "auto", verticalAlign: "middle", textAlign: "center", userSelect: "none" }}>
                    {timerValue ? (timerValue['sec'] < 10 ? `0${timerValue['sec']}` : timerValue['sec']) : "00"}
                </Typography>

                <Typography variant="h1" color={"text.primary"} sx={{ fontSize: "100px", height: "100px", marginLeft: "auto", marginRight: "auto", verticalAlign: "middle", textAlign: "center", userSelect: "none" }}>
                    {timerValue ? (timerValue['hundreth'] < 10 ? `0${timerValue['hundreth']}` : timerValue['hundreth']) : "00"}
                </Typography>
            </Stack>

            {/* <Box sx={{height: "100vh", width: "100vw", position: "absolute", backdropFilter: "blur(2px)"}}> */}

            {/* </Box> */}

            {!timerMode && <Fab size="large" color="primary" aria-label="pause" sx={{ position: 'absolute', bottom: "15vh", left: "10vw", right: 0, width: "100px", height: "100px" }} onClick={() => { setTimerMode(true); runTimer(timerValue.min, timerValue.sec) }} ><PlayArrowIcon fontSize="large" /></Fab>}
            <Fab sx={{ position: 'absolute', bottom: "15vh", right: "10vw", width: "100px", height: "100px" }} onClick={() => { props.iterateStage() }}><SkipNextIcon fontSize="large" /></Fab>
        </Box>
    );

}
