import React from 'react'
import { Container } from '@mui/material'

function Items() {
    return (
        <Container
            id='items'
            component='section'
            disableGutters={true}
            sx={{
                minHeight: '100vh',
                minWidth: '100%',
                bgcolor: 'yellow'
            }}
            fixed
        >

        </Container>
    )
}

export default Items