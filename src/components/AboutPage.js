import React from 'react'
import styled,{ keyframes, ThemeProvider } from 'styled-components'

import {DarkTheme} from './Themes';

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import astronaut from '../assets/Images/spaceman.png'
import BigTitle from "../subComponents/BigTitlte"


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% {transform: translateY(-10px) }
50% {transform: translateY(15px) translateX(15px) }
100% {transform: translateY(-10px) }`


const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 100;
  height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem ;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);


position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;

`


const AboutPage = () => {
  return (

    <ThemeProvider theme={DarkTheme}>

      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton  />
        <ParticleComponent theme='dark' />

        <Spaceman>
          <img src={astronaut} alt='spaceman' />
        </Spaceman>

        <Main>
          I'm a front-end developer located in Nigeria. I describe myself as a passionate developer who loves coding, open source, and the web platform.
          <br /> 
          I'm interested in the whole frontend stack Like trying new things and building great projects. I love to write blogs and read books.
          Aside from my job, I like to create, research and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects.
          <br />
          In my free time you can find me video gaming🎮 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups 💻 and conferences around the world 	🌎
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />

      </Box>

    </ThemeProvider>



   
  )
}

export default AboutPage