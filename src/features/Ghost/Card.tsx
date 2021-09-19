import React from 'react'

import {
    Ghost,
} from '../../models'

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckIcon from '@mui/icons-material/Check';

const GhostCard: React.FC<Ghost> = ({
    name,
    strength,
    weakness,
    evidence,
}) => {
    return (
        <Card sx={{ mb: 1, p: 2 }}>
            <Typography variant="h5" component="h3" mb={2}>{name}</Typography>
            <Typography variant="h6" component="h4" mb={0}>Evidence</Typography>
            <List>
            {evidence.map((evidence) => (
                <ListItem sx={{p: 0}}>
                    <ListItemIcon sx={{minWidth: 35}}>
                        <CheckIcon />
                    </ListItemIcon>
                    <ListItemText>{evidence}</ListItemText>
                </ListItem>
            ))}
            </List>
            <Typography mb={0}><strong>Strength:</strong> {strength}</Typography>
            <Typography mb={0}><strong>Weakness:</strong> {weakness}</Typography>
        </Card>
    );
};

export default GhostCard;