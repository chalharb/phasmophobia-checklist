import React from 'react'
import { useGlobalState } from '../../state';
import { Evidence } from '../../models'
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material'

const Filter: React.FC = () => {
  const [filters, setFilters] = useGlobalState('filters')
  let localFilters = ['']

  const handleFilterUpdate = (event:any) => {
    console.log(event.target.checked)
  }

  return (
    <>
      <Typography variant="h4" component="h2" mb={2}>Evidence</Typography>
      <Card>
        <CardContent>
          <FormGroup>
            {(Object.keys(Evidence) as Array<keyof typeof Evidence>).map((evidence) => (
              <FormControlLabel control={<Checkbox onChange={handleFilterUpdate}/>} label={Evidence[evidence]} />
            ))}
            <Button variant="contained" sx={{ mt: 1 }}>Reset</Button>
          </FormGroup>
        </CardContent>
      </Card>
    </>
  );
};

export default Filter;