import React ,{ useState, Suspense, lazy } from 'react';
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

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
  background-color: ${({ theme }) => theme.bg};
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

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Suspense
                  fallback={
                    <div
                      className='flex justify-center
                      items-center min-h-screen text-2xl text-pink-700'
                    >
                      <CircularProgress
                        size={45}
                        className='mr-2'
                        color="inherit"
                      />
                      Loading....
                    </div>
                  }
                >
                  <Routes>
                    {/* =================RouterComponents====================== */}
                    <Route path="/">
                      <Route index element={<HomeView type="random" />} />
                      <Route path="trends" element={<HomeView type="trend" />} />
                      <Route path="subscriptions" element={<HomeView type="sub" />} />
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
      </ThemeProvider>
    </>
  )
}

export default App
