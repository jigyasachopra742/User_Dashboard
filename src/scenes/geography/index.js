import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';

const Geography = () => {
  return (
    <Box m="20px">
        <Header title="Geography Chart " subtitle="My Geography chart"/>
          <GeographyChart />
    </Box>
  )
}

export default Geography;