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

const Home = ({type}) => {
  const proxyUrl = 'http://localhost:8000'; // replace with your proxy URL
  const apiUrl = '/api/videos/random'; // replace with your API endpoint
  const requestUrl = new URL(apiUrl, proxyUrl);

  const [videos, setVideos] = useState([]);

  const fetchAPI = async () => {
    await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setVideos(data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  useEffect(() => {
    fetchAPI();
  }, [])

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
          {videos.map((video) => (
            <Card key={video._id} video={video}/>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Home
