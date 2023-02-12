import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SettingsIcon from '@mui/icons-material/Settings';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 65px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;


const Input = styled.input`
  display: flex;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding: 0px 20px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search for your video...." />
          <Items>
            <SearchOutlinedIcon />
          </Items>
        </Search>
        <Items
          className="mx-2"
        >
          <Tooltip title="Live">
            <EmergencyRecordingIcon
              className="text-rose-600"
            />
          </Tooltip>
        </Items>
        <Items
          className="mx-2"
        >
          <Tooltip
            title='Notifications'
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <AddAlertIcon
              className="text-rose-600"
            />
          </Tooltip>
        </Items>
        <Items
          className="ml-2 mr-4"
        >
          <Tooltip
            title='Settings'
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <SettingsIcon
              className="text-rose-600"
            />
          </Tooltip>
        </Items>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
