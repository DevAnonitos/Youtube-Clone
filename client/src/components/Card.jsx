import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  return (
    <>
      <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
        <Container type={type}>
          <Image
          type={type}
            src={video.imgUrl}
          />
          <Details type={type}>
            <ChannelImage
              type={type}
              src="https://gstatic.gvn360.com/2022/11/Mat-na_-13-1068x580.jpg"
            />
            <Texts>
              <Title>{video.title}</Title>
              <ChannelName>DevTol</ChannelName>
              <Info>{video.views} views • {format(video.createdAt)}</Info>
            </Texts>
          </Details>
        </Container>
      </Link>
    </>
  );
};

export default Card;
