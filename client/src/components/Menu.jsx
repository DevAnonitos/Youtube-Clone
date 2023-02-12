import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoYTB from "../assets/img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1.2;
  height: 100vh;
  background-color: #202020;
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

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = () => {
  return (
    <>
      <Container
        className='overflow-y-auto'
      >
        <Wrapper>
          <Link
            to="/"
          >
            <Logo>
              <Img
                src={LogoYTB}
                className='brightness-200'
              />
              <h1
                className='text-lg ml-2 text-transparent
                bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'
              >
                YoutubeClone
              </h1>
            </Logo>
          </Link>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>
          <Hr />
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Link to="signin" style={{textDecoration:"none"}}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          </Login>
          <Hr />
          <Title>Best of BaoBao</Title>
          <Item>
            <LibraryMusicOutlinedIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            Sports
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
            Gaming
          </Item>
          <Item>
            <MovieOutlinedIcon />
            Movies
          </Item>
          <Item>
            <ArticleOutlinedIcon />
            News
          </Item>
          <Item>
            <LiveTvOutlinedIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsOutlinedIcon />
            Settings
          </Item>
          <Item>
            <FlagOutlinedIcon />
            Report
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
            Help
          </Item>
          <Item>
            <SettingsBrightnessOutlinedIcon />
            Mode
          </Item>
          <Title>Best of BaoBao</Title>
          <Title>Best of BaoBao</Title>
          <Title>Best of BaoBao</Title>
        </Wrapper>
      </Container>
    </>
  )
}

export default Menu
