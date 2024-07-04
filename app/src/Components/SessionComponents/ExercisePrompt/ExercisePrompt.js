import * as React from 'react';
import { useEffect, useState } from 'react';
import { IconButton, Box, Stack, FormControl, FormHelperText, InputAdornment, OutlinedInput, FormControlLabel, Checkbox, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ExercisePrompt(props) {

    const [sameExercise, setSameExercise] = useState(true);

    // To keep track of what you typed for this current one 
    const [currentPromptExercise, setCurrentPromptExercise] = useState(props.currentExercise);

    // Used to track state of checkbox and set it in sameExercise field
    const handleChecked = (event) => {
        setSameExercise(event.target.checked);
    };
    
    return (
        <Box style={{ display: "unset" }}>
            <Stack spacing={7} sx={{ position: "relative", width: "100%", alignItems: "center", paddingTop: "12vmax" }}>

                {/* currentExercise in Session.js is set once the next arrow button is submitted from the state IF sameExercise is set to false*/}
                {/* Resets prompt exercise and sameExercise checkbox */}
                <IconButton style={{ right: "1%", top: "1%", position: "fixed" }} size="large" onClick={() => {if (!sameExercise) { props.setCurrentExercise(currentPromptExercise); setCurrentPromptExercise(""); setSameExercise(true);}; props.iterateStage();}}>
                    <ArrowForwardIcon fontSize="inherit" />
                </IconButton>

                {/* If checked, state is set which is used to disable the TextField, which also uses currentExercise from the previous run to display as the current value*/}
                {/* if unchecked, onChange for the TextField will change the state of the current prompt exercise, which is then reflected in the TextField */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <FormControlLabel sx={{color: "text.secondary"}} control={<Checkbox defaultChecked checked={sameExercise} onChange={handleChecked}/>} label="Same exercise"/>
                    <TextField
                        id="exercise"
                        aria-describedby="exercise-helper-text"
                        inputProps={{
                            'aria-label': 'exercise',
                        }}
                        // disabled={sameExercise}
                        defaultValue={sameExercise ? props.currentExercise : ""}
                        value={sameExercise ? props.currentExercise : currentPromptExercise}
                        onChange={(e)=>{setCurrentPromptExercise(e.target.value)}}
                    />

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
                    />
                </FormControl>

            </Stack>
        </Box>
    );
}