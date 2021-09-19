import React from 'react'
import Filter from './features/Filter'
import { GhostList } from './features/Ghost/'

import {
  Container,
  Grid,
  Typography,
} from '@mui/material'

const App: React.FC = () => {
  return (
      <Container maxWidth="xl">
        <Typography variant="h2" component="h1" mt={2} mb={2}>Phasmophobia Checklist</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={3}>
            <Filter />
          </Grid>
          <Grid item sm={12} md={9}>
            <GhostList />
          </Grid>
        </Grid>
      </Container>
  );
}

export default App;
