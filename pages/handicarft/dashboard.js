import * as React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material'
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
import SettingsIcon from '@mui/icons-material/Settings';
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
                            <Tab label="account" value='account' icon={<SettingsIcon />} iconPosition='start' sx={{ justifyContent: 'flex-start' }} />
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

                        <TabPanel value='handicrafts' sx={{ height: '100%', padding: '0px' }}>
                            handicrafts
                        </TabPanel>

                        <TabPanel value='items' sx={{ height: '100%', padding: '0px' }}>
                            items
                        </TabPanel>

                        <TabPanel value='notifications' sx={{ height: '100%', padding: '0px' }}>
                            notifications
                        </TabPanel>


                        <TabPanel value='creat' sx={{ height: '100%', padding: '0px' }}>
                            <ItemForm />
                        </TabPanel>

                        <TabPanel value='account' sx={{ height: '100%', padding: '0px' }}>
                            <Account />
                        </TabPanel>

                    </Grid>

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

import { TextField } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare as faLayerGroup } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faCoffee} />

const ItemForm = () => {
    const [itemName, setItemName] = React.useState("lorem ipsum");
    const [description, setDescription] = React.useState("lorem ipsum lomusin simm smion");
    const [price, setPrice] = React.useState(200);
    const [images, setImages] = React.useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("itemName", itemName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("images", images);

        try {
            // change the URL to your server's endpoint
            const response = await fetch("/api/items", {
                method: 'POST',
                body: formData,
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }

        /*  setItemName("");
         setDescription("");
         setPrice("");
         setImages(null); */
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    return (
        <Stack component={'section'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <FontAwesomeIcon icon={faLayerGroup} fontSize={'2rem'} />
            <form onSubmit={handleSubmit} style={{ height: '50%', alignSelf: 'center' }}>
                <Grid container spacing={2} width={7 / 12} flexGrow={1} margin={'auto'}>

                    <Grid item xs={12} >
                        <TextField
                            name='itemName'
                            label="Item Name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={3} >
                        <TextField
                            name='price'
                            label="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            fullWidth
                            required
                            inputProps={{
                                min: 1,
                            }}
                        />
                    </Grid>

                    <Grid item xs={9} >
                        <TextField
                            name='description'
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            multiline
                            rows={1}
                            inputProps={{
                                placeholder: "A brief discription about the item",
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <input
                            style={{ display: "none" }}
                            id="images"
                            type="file"
                            accept="image/*"
                            name="images"
                            required
                            onChange={handleImageChange}
                            multiple
                        />
                        <label htmlFor="images">
                            <Button variant="outlined" fullWidth component="span">
                                {"Choose a set of images for the item "}
                            </Button>
                        </label>
                    </Grid>
                    <Grid item >
                        <Button type="submit" variant="contained" color="primary" size='large'>submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Stack>
    );
};


import { faUserPen, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
function Account() {
    const [view, setView] = React.useState('editProfile');

    const changeView = (event, newView) => {
        setView(newView);
    };

    return (
        <Grid container sx={{ height: '100%' }} justifyContent={'center'}>
            <Grid item xs={10} marginTop={5}>
                <TabContext value={view}>
                    <TabList onChange={changeView} aria-label="Tabs example" centered>
                        <Tab
                            icon={<FontAwesomeIcon icon={faUserPen} size='2x' />}
                            iconPosition="start"
                            label="edit profile"
                            value="editProfile"
                        />
                        <Tab
                            icon={<FontAwesomeIcon icon={faUnlockKeyhole} size='2x' />}
                            iconPosition="start"
                            label="change password"
                            value="changePassword"
                        />
                    </TabList>
                    <TabPanel value="editProfile">
                        <EditProfileTab />
                    </TabPanel>
                    <TabPanel value="changePassword">
                        <ChangePasswordTab />
                    </TabPanel>
                </TabContext>
            </Grid>
        </Grid>

    );
}

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function EditProfileTab() {
    const [userDetails, setUserDetails] = React.useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        profileImageName: null,
        carft: '',
    });
    const [profileImageName, setProfileImageName] = React.useState(undefined);

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        // Do something with the file
        const maxSizeInMB = 2;
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

        if (file.size > maxSizeInBytes) {
            setProfileImageName(undefined);
            alert("File size exceeds 2MB limit.choose another file");
            return (event.target.value = ""); // Clear the selected file
        }
        setProfileImageName(file.name);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const serverResponse = await fetch("/api/handicrafts/updateProfile", {
                method: "POST",
                body: formData,
            });

            // If response is ok, then parse it to JSON
            if (serverResponse.ok) {
                const response = await serverResponse.json();
                console.log(response);
            } else {
                console.error("Server response was not ok.", serverResponse);
            }
        } catch (error) {
            console.error("Error:", error);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} width={10 / 12} justifyContent={'center'} alignItems={'center'} margin={'auto'}>
                {/* full name */}
                <Grid item xs={12} md={6}>
                    <TextField
                        name="fullName"
                        label="Full Name"
                        required
                        fullWidth
                        size="small"
                        inputProps={{
                            required: true,
                            pattern: "[A-Za-z ]{3,}",
                            placeholder: "Name must contain at least 3 characters",
                            //TODO: remove the default value
                            defaultValue: "John Doe",
                        }}
                    />
                </Grid>

                {/* profile image */}
                <Grid item xs={12} md={6}>
                    <input
                        // className={classes.input}
                        style={{ display: "none" }}
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        name="profileImage"
                        onChange={handleProfileImageChange}
                    />
                    <label htmlFor="profileImage">
                        <Button variant="outlined" fullWidth component="span">
                            {profileImageName ? profileImageName : "Choose A Profile Image"}
                        </Button>
                    </label>
                </Grid>

                {/* craft */}
                <Grid item xs={12} md={6}>
                    <FormControl required fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Craft</InputLabel>
                        <Select
                            name="craft"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={20}
                            label="craft"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* address */}
                <Grid item xs={12} md={6}>
                    <TextField
                        name="address"
                        label="Address"
                        required
                        fullWidth
                        size="small"
                        //TODO: remove the default value
                        defaultValue="Address 123 Imb Park, Morocco"
                    />
                </Grid>

                {/* email */}
                <Grid item xs={12} md={6}>
                    <TextField
                        name="email"
                        label="Email"
                        required
                        fullWidth
                        size="small"
                        //TODO: remove the default value
                        defaultValue="email@example.com"
                    />
                </Grid>

                {/* phone number */}
                <Grid item xs={12} md={6}>
                    <TextField
                        name="phoneNumber"
                        label="phone number"
                        required
                        fullWidth
                        size="small"
                        inputProps={{
                            type: "tel",
                            required: true,
                            pattern: "\\+212[56][0-9]{8}",
                            placeholder: "Phone number must be in the format +2126xxxxxx",
                        }}
                        //TODO: remove the default value
                        defaultValue="+212612345678"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        save
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
function ChangePasswordTab() {
    const [userDetails, setUserDetails] = React.useState({
        oldPassword: '',
        newPassword: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const serverResponse = await fetch("/api/changePassword", {
                method: "POST",
                body: formData,
            });

            // If response is ok, then parse it to JSON
            if (serverResponse.ok) {
                const response = await serverResponse.json();
                console.log(response);
            } else {
                console.error("Server response was not ok.", serverResponse);
            }
        } catch (error) {
            console.error("Error:", error);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} width={10 / 12} justifyContent={'center'} alignItems={'center'} margin={'auto'}>
                {/* old password */}
                <Grid item xs={12}>
                    <TextField
                        name="oldPassword"
                        label="Old Password"
                        type='password'
                        required
                        fullWidth
                        size="large"
                    />
                </Grid>
                {/* new password */}
                <Grid item xs={12}>
                    <TextField
                        name="newPassword"
                        label="new Password"
                        type='password'
                        required
                        fullWidth
                        size="large"
                    />
                </Grid>

                {/* confirmed password */}
                <Grid item xs={12}>
                    <TextField
                        name="confirmedPassword"
                        label="confirm new Password"
                        type='password'
                        required
                        fullWidth
                        size="large"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        change password
                    </Button>
                </Grid>

                {/* link Forgot password */}
                <Grid item xs={12}>
                    <NextLink href="/password/reset">
                            Forgot password?
                        {/* <MuiLink underline="none">
                        </MuiLink> */}
                    </NextLink>

                </Grid>
            </Grid>
        </form>
    );
}
