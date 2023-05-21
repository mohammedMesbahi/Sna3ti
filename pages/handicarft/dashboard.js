import * as React from 'react';
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Rating from '@mui/material/Rating';
function Dashboard() {

    const [view, setView] = React.useState('profile');

    const changeView = (event, newView) => {
        setView(newView);
    };

    return (
        <TabContext value={view}>
            {/* Container */}
            <Grid
                container
                height={'100vh'}
                component={'section'}
            >
                {/* sidebar */}
                <Grid
                    container
                    width={2 / 12}
                    component={'aside'}
                    height={'100%'}
                    direction={'column'}
                    borderRight={'1px solid lightGray'}
                >
                    {/* logo */}
                    <Grid item borderBottom={'1px solid lightGray'}>
                        <Stack direction="row" alignItems="center">
                            <Image
                                src="/logs/6.jpeg"
                                width={64}
                                height={64}
                                alt="Picture of the author"
                                style={{ display: 'inline' }}
                            >
                            </Image>
                            <Typography variant="h5"  >
                                MyCraft
                            </Typography>
                        </Stack>
                    </Grid>
                    {/* menu */}
                    <Grid item flexGrow={1}>
                        <TabList
                            onChange={changeView}
                            orientation="vertical"
                        >
                            <Tab label="profile" value='profile' icon={<AccountCircleIcon />} iconPosition="start" sx={{ justifyContent: 'flex-start' }} />
                            <Tab label="handicrafts" value='handicrafts' icon={<PeopleOutlineIcon />} iconPosition="start" sx={{ justifyContent: 'flex-start' }} />
                            <Tab label="items" value='items' icon={<ShoppingCartIcon />} iconPosition='start' sx={{ justifyContent: 'flex-start' }} />
                            <Tab label="notifications" value='notifications' icon={<NotificationsNoneIcon />} iconPosition='start' sx={{ justifyContent: 'flex-start' }} />
                            <Tab label="publish an Item" value='creat' icon={<AddCircleOutlineIcon />} iconPosition='start' sx={{ justifyContent: 'flex-start' }} />
                        </TabList>
                    </Grid>

                    {/* footer */}
                    <Grid item borderTop={'1px solid lightGray'}>
                        <Button
                            sx={{ width: '100%' }}
                            startIcon={<LogoutIcon sx={{ rotate: '180deg' }} />}
                        >
                            Log Out
                        </Button>
                    </Grid>
                </Grid>

                {/* main section */}
                <Grid
                    container
                    width={10 / 12}
                    component={'main'}
                    height={'100%'}
                >
                    <Grid item flexGrow={1} >
                        <TabPanel value='profile' sx={{ height: '100%', padding: '0px' }}>
                            <ProfileSection />
                        </TabPanel>
                    </Grid>
                    <TabPanel value='handicrafts' >
                        handicrafts
                    </TabPanel>
                    <TabPanel value='items'>
                        items
                    </TabPanel>
                    <TabPanel value='creat'>
                        publish an Item
                    </TabPanel>

                </Grid>
            </Grid>
        </TabContext >

    )
}

export default Dashboard;
function ProfileSection() {
    return (
        <Grid container height={'100%'} direction={'column'}>
            <Grid item padding={2} borderBottom={'1px solid lightGray'}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Image src="/images/embroidery.png" width={100} height={100} alt="Picture of the author"
                        style={{
                            display: 'inline',
                            borderRadius: '50%',
                        }}
                    />
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h5"  >
                            Mohammed Mesbahi Aouam
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems={'center'}>
                            <Typography variant="subtitle1" display={'inline'} >
                                developer
                            </Typography>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        </Stack>
                    </Stack>
                </Stack>

            </Grid>

            <Grid item flexGrow={1}>
                items
            </Grid>
        </Grid>
    )
}