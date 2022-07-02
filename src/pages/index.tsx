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
        <Link href='#'>
          <ButtonNav>About</ButtonNav>
        </Link>
        <Link href='#'>
          <ButtonNav>Services</ButtonNav>
        </Link>
        <Link href='#'>
          <ButtonNav>Works</ButtonNav>
        </Link>
        <Link href='#'>
          <ButtonNav>Contact</ButtonNav>
        </Link>
      </NavBar>
      <Main>
        <Headline>
          Hello, I’m John, a Software Engineer.
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
            <ButtonActions>
              View Work
            </ButtonActions>
          </Link>
        </MainActions>
      </Main>
    </PageContainer>
  )
}

export default Home

export const PageContainer = styled.div``
export const NavBar = styled.div``
export const Main = styled.main``
export const Headline = styled.h1``
export const SubHeadline = styled.h2``
export const MainActions = styled.div``

export const Button = styled.button``
export const ButtonNav = styled(Button)``
export const ButtonActions = styled(Button)``
