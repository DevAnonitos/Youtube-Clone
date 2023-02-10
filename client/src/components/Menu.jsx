import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoYTB from "../assets/img/logo.png";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: #fff;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;


const Menu = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Link
            to="/"
          >
            <Logo>
              <Img
                src={LogoYTB}
              />
              YoutubeClone
            </Logo>
          </Link>
        </Wrapper>
      </Container>
    </>
  )
}

export default Menu
