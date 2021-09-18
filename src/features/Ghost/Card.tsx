import React from 'react'

import {
    Ghost,
} from '../../models'

import {
    Card,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'

const GhostCard: React.FC<Ghost> = ({
    name,
    strength,
    weakness,
    evidence,
}) => {
    return (
        <Card sx={{ mb: 1 }}>
            <CardContent sx={{ mb: 0, pb: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h5" component="h3" mb={2}>{name}</Typography>
                        <Typography variant="h6" component="h4" mb={2}>Evidence</Typography>
                        <ul>
                            {evidence.map((evidence) => (<li>{evidence}</li>))}
                        </ul>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" component="h4" mb={2}>Strength</Typography>
                        <ul>
                            <li>{strength}</li>
                        </ul>
                        <Typography variant="h6" component="h4" mb={2}>Weakness</Typography>
                        <ul>
                            <li>{weakness}</li>
                        </ul>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default GhostCard;