import React from 'react'

import { Container, HeroContentAction,HeadingContainer, HeroGrid, HeroImage, HeroParagraph, LargeHeading, RedActionButton } from './HeroStyles'

export const Hero=()=> {
  return (
    <Container>
        <HeroGrid>

            <HeroContentAction>
                <HeadingContainer>
                  <LargeHeading>TinkerHub</LargeHeading>
                  <LargeHeading> CE Chengannur</LargeHeading>
                </HeadingContainer>
                
                <HeroParagraph>Official TinkerHub Chapter of <br></br>College of Engineering, Chengannur</HeroParagraph>
                <RedActionButton href="https://join.tinkerhub.org/" target="_blank">Join Us</RedActionButton>
                
            </HeroContentAction>

            <HeroImage src="/images/hero-bg.png"/>
        </HeroGrid>
        

    </Container> 
  )
}

 