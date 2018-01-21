import React from 'react'
import styled from 'styled-components'
import logo from './camera.png'

const Background = styled.div`
  background: ${props => props.c};
  width: 100%;
`

const Logo = styled.div`
  color: ${props => props.c};
  font-size: ${props => props.fs};
  text-transform: ${props => props.tt};
  font-weight: ${props => props.fw};
  display: ${props => props.dis};
  padding-left: 15px;
`

const LogoImage = styled.img`
  width: 50px;
  display: inline;
`

const Container = styled.div`padding: 2%;`

const Top = () => (
  <div>
    <Background c="#3a7bd5">
      <Container>
        <LogoImage src={logo} />
        <Logo c="#fff" fw="800" dis="inline" tt="none" fs="3rem">
          Camlytics
        </Logo>
      </Container>
    </Background>
  </div>
)

export default Top
