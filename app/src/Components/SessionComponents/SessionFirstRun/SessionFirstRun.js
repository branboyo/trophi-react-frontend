import * as React from 'react';
import { useEffect, useState } from 'react';
import { IconButton, Box, Stack, FormControl, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { sendSet } from '../../../Utilities/dbUtil';

export default function SessionFirstRun(props) {
    const [currentReps, setCurrentReps] = useState(0);
    const [currentWeight, setCurrentWeight] = useState(0);
    return (
        <Box style={{ display: "unset" }}>
            <Stack spacing={7} sx={{ position: "relative", width: "100%", alignItems: "center", paddingTop: "12vmax" }}>

                <IconButton style={{ right: "1%", top: "1%", position: "fixed" }} size="large" onClick={(e) => {sendSet(new Date(), {exercise: props.currentExercise, reps: currentReps, weight: currentWeight}); props.iterateStage();}}>
                    <ArrowForwardIcon fontSize="inherit" />
                </IconButton>
                
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="exercise"
                        aria-describedby="exercise-helper-text"
                        inputProps={{
                            'aria-label': 'exercise',
                        }}
                        onChange={(e)=>{props.setCurrentExercise(e.target.value)}}/>
                    <FormHelperText id="outlined-exercise-helper-text">Exercise</FormHelperText>
                </FormControl>
                
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="weight"
                        type='number'
                        endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        onChange={(e)=>{setCurrentWeight(e.target.value)}}
                    />

                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="reps"
                        type='number'
                        endAdornment={<InputAdornment position="end">reps</InputAdornment>}
                        aria-describedby="outlined-reps-helper-text"
                        inputProps={{
                            'aria-label': 'reps',
                        }}
                        onChange={(e)=>{setCurrentReps(e.target.value)}}
                    />
                </FormControl>

            </Stack>
        </Box>
    );
}
