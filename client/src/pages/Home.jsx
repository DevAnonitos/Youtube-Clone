import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Card from "../components/Card";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const baseURL = "http://localhost:8000/api/videos/random";

const Home = ({type}) => {

  return (
    <>
      <Container>
        <Stack direction="row" spacing={1}>
          <Chip
            color="primary"
            label="Home"
            variant="outlined"
          />
        </Stack>
        {/* ==========================CardList============================= */}
        <div
          className='flex flex-wrap justify-between
          mt-10 scroll-smooth'
        >

            <Card />
        </div>
      </Container>
    </>
  )
}

export default Home
