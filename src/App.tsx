import React from 'react'
import Filter from './features/Filter'
import { useGlobalState } from './state';
import {GhostList} from './features/Ghost/'

import {
  Container,
  Grid,
  Typography,
} from '@mui/material'

const App: React.FC = () => {
  const [ghosts] = useGlobalState('ghosts');

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" component="h1">Phasmophobia Checklist</Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <Filter />
        </Grid>
        <Grid item sm={12} md={9}>
          <GhostList data={ghosts} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
