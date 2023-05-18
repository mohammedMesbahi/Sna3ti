import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Tab } from '@mui/material'
import Modal from '@mui/material/Modal';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HandymanIcon from '@mui/icons-material/Handyman';
import CustomerRegistrationForm from '../registrationForms/CustomerRegistrationForm'
import HandiCraftRegistrationForm from '../registrationForms/HandiCraftRegistrationForm'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '0px',
  boxShadow: 4,
  p: 2,
};

export default function RegistrationModal({ open, setOpen }) {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <div>
      <Modal
        open={open}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label='Tabs example'
                textColor='black'
                centered
              >
                <Tab
                  icon={<HandymanIcon />}
                  iconPosition='start'
                  label='As Handicraft'
                  value='1'
                />
                <Tab
                  icon={<ShoppingCartIcon />}
                  iconPosition='start'
                  label='Or As Customer'
                  value='2' />

              </TabList>
            </Box>
            <TabPanel value='1'>
              <HandiCraftRegistrationForm></HandiCraftRegistrationForm>
            </TabPanel>
            <TabPanel value='2'>
              <CustomerRegistrationForm></CustomerRegistrationForm>
            </TabPanel>
          </TabContext>

          <Button size='large' variant="contained" sx={{
            backgroundColor: '#fcb900', ":hover": {
              color: 'white',
              bgcolor: 'black'
            }
          }}
            onClick={handleClose}
          >
            cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
