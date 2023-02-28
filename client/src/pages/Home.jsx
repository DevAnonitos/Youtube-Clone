import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const proxyUrl = `http://localhost:8000`;
  const apiUrl = `/api/videos/${type}`;
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
  }, [type])

  return (
    <>
      <Container className='mt-10'>
        {/* ==========================CardList============================= */}
          {videos.map((video) => (
            <Card key={video._id} video={video}/>
          ))}
      </Container>
    </>
  )
}

export default Home;
