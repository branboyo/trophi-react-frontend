import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TimelineIcon from '@mui/icons-material/Timeline';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


// props.currentPage <int>
// props.setCurrentPage <int>
export default function BottomNavigationComponent(props) {

    return (

        <BottomNavigation
            showLabels
            // Value is what toggles the bottom navigation highlight
            value={props.currentPage}
            onChange={(event, newValue) => {
                props.setCurrentPage(newValue)
            }}

            
        >
            <BottomNavigationAction label="Log" icon={<TimelineIcon />} />
            <BottomNavigationAction label="Session" icon={<FitnessCenterIcon />} />
            <BottomNavigationAction label="Me" icon={<AccountCircleIcon />} />
        </BottomNavigation>

    );
}