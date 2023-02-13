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
            color="primary"
            label="Home"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Game"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Cook"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Life Styles"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Movies"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Action"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Cartoon"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Live"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Market"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Survival"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Education"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            color="primary"
            label="Commerce"
            variant="outlined"
            onClick={handleClick}
          />
           <Chip
            color="primary"
            label="Funny"
            variant="outlined"
            onClick={handleClick}
          />
           <Chip
            color="primary"
            label="Short video"
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
          <Card />
        </div>
      </Container>
    </>
  )
}

export default Home
