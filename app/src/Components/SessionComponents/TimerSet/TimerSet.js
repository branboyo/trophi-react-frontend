import { Box, Typography } from '@mui/material';
import { MultiSectionDigitalClockSection } from '@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {IconButton} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import Picker from 'react-mobile-picker'

export default function TimerSet(props) {

    const minuteSelections = { minutes: [0, 1, 2, 3, 4, 5] }
    const secondSelections = { seconds: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] }

    const submitTimer = () => {
        props.setTimerValue({
            min: props.minutePicker.minutes,
            sec: props.secondPicker.seconds,
            hundreth: 0
        });
        props.iterateStage();
    }

    return (
        <Box style={{}}>

            <Typography variant='h3' sx={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}>
                Set a rest timer
            </Typography>

            <IconButton style={{ right: "1%", top: "1%", position: "fixed" }} size="large" onClick={submitTimer}>
                <ArrowForwardIcon fontSize="inherit" />
            </IconButton>
            
            <Box sx={{}}>
            <Picker value={props.minutePicker} onChange={props.setMinutePicker} style={{ position: "absolute", width: "20vmax", left: "15vw"}}>
                {Object.keys(minuteSelections).map(name => (
                    <Picker.Column key={name} name={name}>

                        {minuteSelections[name].map(option => (
                            <Picker.Item key={option} value={option}>
                                {option}
                            </Picker.Item>

                        ))}
                    </Picker.Column>
                ))}
                <Typography style={{ position: "absolute", top: "44.5%", left: "54.5%" }}>
                    min
                </Typography>
            </Picker>

            <Picker value={props.secondPicker} onChange={props.setSecondPicker} style={{ position: "absolute", width: "20vmax", right: "15vw"}}>
                {Object.keys(secondSelections).map(name => (
                    <Picker.Column key={name} name={name}>

                        {secondSelections[name].map(option => (
                            <Picker.Item key={option} value={option}>
                                {option}
                            </Picker.Item>

                        ))}
                    </Picker.Column>
                ))}
                <Typography style={{ position: "absolute", top: "44.5%", left: "55.5%" }}>
                    sec
                </Typography>
                <div style={{clear:"both"}}></div>
            </Picker>
            </Box>
            
        </Box>
    );

}
