import * as React from 'react';
import { useState } from 'react';
import { Stack, Box, Button, Typography, Paper, Alert } from '@mui/material';

export default function Profile(props) {

    return (
        <Box>
            <img width="256px" height="256px" style={{display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "40%"}} src={require('../../resources/under-construction.png')}></img>
            <Typography variant='h4' textAlign={"center"} color='rgb(143,143,143)'>Page under construction</Typography>
        </Box> 
    );
}   