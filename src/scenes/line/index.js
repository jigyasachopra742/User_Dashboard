import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
  return (
    <Box m="20px">
        <Header title="Line Chart " subtitle="My Line chart"/>
        <Box height="75vh">
          <LineChart />
        </Box>
    </Box>
  )
}

export default Line;