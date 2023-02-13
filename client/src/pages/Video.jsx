import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.div``;
const Info = styled.span``;
const Buttons = styled.div``;
const Button = styled.div``;

const Recommentdation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="720"
              src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
              
            </iframe>
          </VideoWrapper>
        </Content>

        <Recommentdation>
          Recomments
        </Recommentdation>
      </Container>
    </>
  )
}

export default Video
