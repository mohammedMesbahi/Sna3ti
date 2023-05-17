import React from 'react'
import { Container } from '@mui/material'

function About() {
  return (
    <Container
            id='about'
            component='section'
            disableGutters={true}
            sx={{
                minHeight: '100vh',
                minWidth:'100%',
                bgcolor:'orange',
            }}
        >

        </Container>
  )
}

export default About