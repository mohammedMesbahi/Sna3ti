import AccountTab from '@/components/dashborads/handicraft/Settings'
import React from 'react'
import DashboardLayout from '@/components/dashborads/handicraft/DashboardLayout'
import EditProfileTab from '@/components/dashborads/handicraft/EditProfileTab';
function accountSettings() {
  return (
    <AccountTab></AccountTab>
  )
}
accountSettings.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default accountSettings