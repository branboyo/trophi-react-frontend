import * as React from 'react';
import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


/* props.exercises = < [
        {
            name: <string>
            sets: [{
                weight: <int>
                reps: <int>
            }]
        }
    ]
> */
export default function SessionFirstRun(props) {

    return (
        <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
                <FormHelperText id="outlined-weight-helper-text">Exercise</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
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
                    id="outlined-adornment-weight"
                    type='number'
                    endAdornment={<InputAdornment position="end">reps</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </FormControl>
        </div>
    );
}
