import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SettingsIcon from '@mui/icons-material/Settings';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
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

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;

const Navbar = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const {currentUser} = useSelector((state) => state.user);

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
        {currentUser ? (
            <User>
              <VideoCallOutlinedIcon
                onClick={() => setOpen(true)}
              />
              <Avatar
                src={currentUser.img}
                className='border-2 ring-1 border-cyan-500'
              />
              {currentUser.name}
            </User>
          ) : (
            <Link
              to="signin"
              style={{ textDecoration: "none" }}
            >
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
