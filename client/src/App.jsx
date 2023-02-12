import React ,{ useState, Suspense, lazy } from 'react';
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const HomeView = lazy(() => delayView(import('./pages/Home')));
const SignInView = lazy(() =>delayView(import('./pages/SignIn')));
const VideoView = lazy(() => delayView(import('./pages/Video')));

const Container = styled.div`
  display: flex;`
;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function delayView(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
              <Suspense
                fallback={
                  <div
                    className='flex justify-center
                    items-center min-h-screen text-3xl'
                  >
                    <CircularProgress />
                  </div>
                }
              >
                <Routes>
                  {/* =================RouterComponents====================== */}
                  <Route path="/">
                    <Route index element={<HomeView />} />
                    <Route path="signin" element={<SignInView />} />
                    <Route path="video">
                      <Route path=":id" element={<VideoView />} />
                    </Route>
                  </Route>
                </Routes>
              </Suspense>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
