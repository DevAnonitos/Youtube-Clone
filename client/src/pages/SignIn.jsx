import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh -56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 385px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 14px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #55E6C1;
  color: ${({ theme }) => theme.text};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <>
      <Container className='mt-10'>
        <Wrapper className='rounded-xl'>
          <Title>Sign in</Title>
          <SubTitle>to continue to DevTol</SubTitle>
          <Input
            placeholder="username"
            className='my-2'
          />
          <Input
            type="password"
            placeholder="password"
            className='my-2'
          />
          <Button>Sign in</Button>
          <Title>or</Title>
          <Input
            placeholder="username"
            className='my-2'
          />
          <Input
            placeholder="email"
            className='my-2'
          />
          <Input
            type="password"
            placeholder="password"
            className='my-2'
          />
          <Button>Sign up</Button>
        </Wrapper>
        <More>
          English(USA)
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Links>
        </More>
      </Container>
    </>
  )
}

export default SignIn
