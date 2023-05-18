// HandiCraftRegistrationForm.jsx
import React, { useState } from 'react';
import UserDetailsForm from './UserDetailsForm';
import VerificationForm from './VerificationForm';

const HandiCraftRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    // ...more fields as needed
  });

  const [verificationCode, setVerificationCode] = useState('');

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
    setStep(2);
    // Here, you would typically also send the details to your server,
    // and start the process for sending the verification code.
  };

  const handleVerificationSubmit = (code) => {
    setVerificationCode(code);
    // You'd then verify the code on the server. If it's correct,
    // you can consider the user fully registered.
  };

  return step === 1
    ? <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
    : <VerificationForm onSubmit={handleVerificationSubmit} />;
};

export default HandiCraftRegistrationForm;

