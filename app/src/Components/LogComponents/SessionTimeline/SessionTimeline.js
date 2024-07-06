import * as React from 'react';
import { useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Chip from '@mui/material/Chip';

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
export default function SessionTimeline(props) {
    const [exerciseElements, setExerciseElements] = useState([]);
    useEffect(() => {
        const data = [];
        // let exercises = Object.keys(props.exercises).map((k) => props.exercises[k]);
        data.push(
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineContent>
                        <Chip label={props.date} color="primary" />
                    </TimelineContent>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
            </TimelineItem>

        )
        // Populating the exerciseElements with timeline component elements
        // stop at -1 to avoid adding extra connector

        let currentExercise = "";
        for (var e = 0; e < props.exercises.length; e++) {

            // Checker to avoid multiple exercise separators
            if (props.exercises[e].exercise !== currentExercise) {
                data.push(
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='primary' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{props.exercises[e].exercise}</TimelineContent>
                    </TimelineItem>
                )
                currentExercise = props.exercises[e].exercise
            }
            data.push(
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        {props.exercises[e].reps} reps
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        {(e < props.exercises.length - 1) && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent color="text.secondary">
                        {props.exercises[e].weight} lbs
                    </TimelineContent>
                </TimelineItem>
            )

        }
        setExerciseElements(data)

    }, [props.exercises]);
    return (

        <Timeline position="left">
            {exerciseElements ? exerciseElements : null}
        </Timeline>
    );
}
