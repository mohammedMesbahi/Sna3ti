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
            <ListItem >
                <Button variant='text' href='#home' sx={{ color: 'inherit' }} >Home</Button>
            </ListItem>
            <ListItem >
                <Button variant='text' href='#handicrafts' sx={{ color: 'inherit' }} >Handicrafts</Button>
            </ListItem>
            <ListItem >
                <Button variant='text' href='#items' sx={{ color: 'inherit' }} >Items</Button>
            </ListItem>
            <ListItem >
                <Button variant='text' href='#about' sx={{ color: 'inherit' }} >About</Button>
            </ListItem>
            <ListItem >
                <Button variant='text' href='#contact' sx={{ color: 'inherit' }} >Contacts</Button>
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
                // zIndex: (theme) => theme.zIndex.drawer + 1

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
