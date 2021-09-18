import React from 'react'

import {
  GhostList as GhostListProps
} from '../../models'

import {
  GhostCard
} from './'

import {
  Typography,
} from '@mui/material'

const GhostList: React.FC<GhostListProps> = ({ data }) => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={2}>Possible Ghosts</Typography>
      {data.map((ghost) => (
        <GhostCard name={ghost.name} strength={ghost.strength} weakness={ghost.weakness} evidence={ghost.evidence} />
      ))}
    </>
  );
};

export default GhostList;