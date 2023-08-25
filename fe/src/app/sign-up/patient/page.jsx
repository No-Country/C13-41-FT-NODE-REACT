'use client'
import React from 'react';
import BasicForm from '@/components/BasicForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
export default function PacientSingUp() {

  return (
    <Container>
      <Typography variant='h3' mt={4} mb={4}>Register</Typography>
      <BasicForm/>
    </Container>
  );
}