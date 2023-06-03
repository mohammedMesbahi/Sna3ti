import React from 'react';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import SignInModal from './modals/SignInModal';
const Navbar = () => {
    const router = useRouter();

    const [open, setOpen] = React.useState(false);
    const [openSignIn, setOpenSignIn] = React.useState(false);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawerItems = (
        <List sx={{
            display: {
                md: 'flex',
            },
            flexDirection: {
                sm: 'column',
                md: 'row',

            },
            cursor: 'pointer'
        }} >
            <ListItem onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={() => document.getElementById('handicrafts').scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="Handicrafts" />
            </ListItem>
            <ListItem onClick={() => document.getElementById('items').scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="Items" />
            </ListItem>
            <ListItem onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="Contact" />
                {/* <Link href="#contact" underline="hover" variant='body1'>
                    Contact
                </Link> */}
            </ListItem>
        </List>

        /*
         <ListItem >
                <Link href="#home" underline="hover" sx={{ color: 'black' }} >
                    <ListItemText primary="Home" />
                </Link>
            </ListItem>
            <ListItem >
                <Link href="#handicrafts" underline="hover" sx={{ color: 'black' }} >
                    <ListItemText primary="Handicrafts" />
                </Link>
            </ListItem>
            <ListItem >
                <Link href="#items" underline="hover" sx={{ color: 'black' }} >
                    <ListItemText primary="Items" />
                </Link>
            </ListItem>
            <ListItem >
                <Link href="#about" underline="hover" sx={{ color: 'black' }} >
                    <ListItemText primary="About" />
                </Link>
            </ListItem>
            <ListItem  >
                <Link href="#contact" underline="hover" sx={{ color: 'black' }} >
                    <ListItemText primary="contact" variant='body1' />
                </Link>
            </ListItem> */
    );

    return (
        <>
            <AppBar sx={{
                bgcolor: 'white',
                color: 'black',
                position: 'sticky',
                opacity: 0.95,
                zIndex: (theme) => theme.zIndex.drawer + 1

            }}
            >
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            marginRight: (theme) => theme.spacing(2), display: {
                                xs: 'block',
                                sm: 'block',
                                md: 'none'
                            }
                        }}

                    >
                        <MenuIcon />
                    </IconButton>

                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        sx={{
                            flexGrow: 1,
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'flex-start'
                            }
                        }}
                    >
                        <Grid item >
                            <Image
                                src="/logs/6.png"
                                width={74}
                                height={74}
                                alt="Picture of the author"
                                style={{ display: 'inline' }}
                            >
                            </Image>

                        </Grid>

                        <Grid item >
                            <Typography variant="h5"  >
                                MyCraft
                            </Typography>
                        </Grid>

                    </Grid>


                    <Box sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'flex'
                        }
                    }} >
                        {drawerItems}
                    </Box>
                    <Button
                        variant="contained"
                        sx={{ color: 'white', minWidth: '100px' }}
                        onClick={() => setOpenSignIn(true)}
                    >Sign In</Button>

                </Toolbar>

            </AppBar >

            <Drawer
                variant="temporary"
                anchor="top"
                open={open}
                onClose={handleDrawerToggle}
                sx={{ width: 240, flexShrink: 0, alignItems: 'center', justifyContent: 'center', top: '6vh' }}


            >
                <div sx={{ width: 240 }}>
                    {drawerItems}
                </div>
            </Drawer>
            <SignInModal open={openSignIn} setOpen={setOpenSignIn} />
        </>
    );
};

export default Navbar;
