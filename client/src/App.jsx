import React ,{ useState, Suspense, lazy } from 'react';
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;`
;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                {/* =================RouterComponents====================== */}
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                  </Route>
                </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
