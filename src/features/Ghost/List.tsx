import React, { useContext } from 'react'
import GlobalStateProvider, { GlobalContext } from '../../state'

import {
  GhostCard
} from './'

import {
  Typography,
} from '@mui/material'

const GhostList: React.FC = () => {
  const { ghosts } = useContext(GlobalContext);

  return (
    <GlobalStateProvider>
      <Typography variant="h4" component="h2" mb={2}>Possible Ghosts</Typography>
      {ghosts.map((ghost) => (
        <GhostCard name={ghost.name} strength={ghost.strength} weakness={ghost.weakness} evidence={ghost.evidence} />
      ))}
    </GlobalStateProvider>
  );
};

export default GhostList;