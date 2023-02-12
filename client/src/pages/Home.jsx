import React from 'react';
import styled from "styled-components";
import Card from "../components/Card";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <>
      <Container>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
           <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
           <Chip
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
        </Stack>
        <div className='flex flex-wrap justify-between mt-10'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </>
  )
}

export default Home
