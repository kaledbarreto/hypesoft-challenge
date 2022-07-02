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
        <Link>
          <span>About</span>
        </Link>
        <Link>
          <span>Services</span>
        </Link>
        <Link>
          <span>Works</span>
        </Link>
        <Link>
          <span>Contact</span>
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
          <Link>
            <ButtonNav>
              Hire Me
            </ButtonNav>
          </Link>
          <Link>
            <ButtonNav>
              View Work
            </ButtonNav>
          </Link>
        </MainActions>
      </Main>
    </PageContainer>
  )
}

export default Home
