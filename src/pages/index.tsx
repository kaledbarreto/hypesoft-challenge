import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Hypesoft - Desafio</title>
      </Head>
      <NavBar>
        <Ul>
          <Li>
            <Link href='#'>
              <NavLink>About</NavLink>
            </Link>
          </Li>
          <Li>
            <Link href='#'>
              <NavLink>Services</NavLink>
            </Link>
          </Li>
          <Li>
            <Link href='#'>
              <NavLink>Works</NavLink>
            </Link>
          </Li>
          <Li>
            <Link href='#'>
              <NavLink>Contact</NavLink>
            </Link>
          </Li>
        </Ul>
      </NavBar>
      <Main>
        <Headline>
          Hello, I’m John, a <br />
          <Strong>Software Engineer.</Strong>
        </Headline>
        <SubHeadline>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.
        </SubHeadline>
        <MainActions>
          <Link href='#'>
            <ButtonActions>
              Hire Me
            </ButtonActions>
          </Link>
          <Link href='#'>
            <ButtonActionsWhite>
              View Work
            </ButtonActionsWhite>
          </Link>
        </MainActions>
      </Main>
    </PageContainer >
  )
}

export default Home

export const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`
export const NavBar = styled.div`
  width: 80%;
`
export const Ul = styled.ul`
  width: 100%;
  height: 106px;
  margin-right: 60px;

  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
`
export const Li = styled.li`
  width: fit-content;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 4%;
`
export const NavLink = styled.span`
  cursor: pointer;
`
export const Main = styled.main`
  max-width: 1100px;
  padding: 230px 0px 0px 290px;
`
export const purpleSquare = styled.div`

`

export const Headline = styled.h1`
  font-weight: 400;
  font-size: 80px;
  line-height: 98px;
`
export const Strong = styled.strong`
  color: ${props => props.theme.colors.primary};
`
export const SubHeadline = styled.h2`
  max-width: 673px;
  margin: 32px 0;

  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
`
export const MainActions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 16px;
`
export const Button = styled.button`
  width: auto;
  height: 56px;
  padding: 32px;

  cursor: pointer;

  border: none;
  border-radius: 5px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 56px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`
export const ButtonActions = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonActionsWhite = styled(ButtonActions)`
  background-color: #FFFFFF;
  color: #242424;
`
