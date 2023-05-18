import { Box, Container, Typography, Button } from '@mui/material'
import React from 'react'
import RegistrationModal from '../modals/Registration';
function Home() {
    const [openRegistrationModal, setOpenRegistrationModal] = React.useState(false);

    return (
        <Container
            className='container1'
            id='home'
            component='section'
            disableGutters={true}


            sx={{
                display: 'flex',
                minHeight: '100vh',
                minWidth: '100%',
                alignItems: {
                    xs: 'center',
                    md: 'flex-start'
                },
                paddingTop: {
                    md: '30vh'
                },
                background: `linear-gradient(45deg, rgb(0, 0, 0, 0.8),rgb(255, 234, 167,0.1)), url('/images/image5.jpg')`,
                backgroundPosition: 'center',
                // /* Center the image */
                backgroundRepeat: 'no-repeat',
                // /* Do not repeat the image */
                backgroundSize: 'cover',
            }}
        >
            <Box color={'white'} paddingLeft={4}>

                <Typography variant='h3' component='h1' color={'inherit'}>
                    Moroccan handmade expert store
                </Typography>
                <Typography variant='h5' component={'p'} marginBottom={4} sx={{ maxWidth: { md: '55%' } }}>
                    The Moroccan handmade expert store, pre order and buy in wholesale
                    Moroccan handicrafts from the first artisans market in Morocco.
                </Typography>

                <Button size='large' variant="contained" sx={{
                    backgroundColor: '#fcb900', ":hover": {
                        color: 'white',
                        bgcolor: 'black'
                    }
                }}
                    onClick={() => setOpenRegistrationModal(true)}
                >
                    Join The Platform</Button>
            </Box>

            <RegistrationModal open={openRegistrationModal} setOpen={setOpenRegistrationModal}>

            </RegistrationModal>
        </Container >
    )
}

export default Home