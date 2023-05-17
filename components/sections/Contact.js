import React from 'react'
import { Container } from '@mui/material'

function Contact() {
    return (
        <Container
            id='contact'
            component='section'
            disableGutters={true}
            sx={{
                minHeight: '100vh',
                minWidth:'100%',
                bgcolor: 'green'
            }}
        >

        </Container>
    )
}

export default Contact