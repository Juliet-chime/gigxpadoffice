import React from 'react'
import { BlockStyle } from '../../../components/dashboardComponents/style'
import { RolesStyle } from '../style'

const AdministratorDetails = () => {
  return (
    <div>
 <h2 className='text-xl font-bold py-3 font-cabinetgrotesk'>Administrator</h2>
 <RolesStyle>
    <p>Dashboard</p>
   <div className='mt-3'>
   <h2>Wallet Balances</h2>
    <h2>Total Failed Transactions</h2>
    <h2>Total Crypto Transactions</h2>
    <h2>Total Customers</h2>
    <h2>Total Fiat Revenue</h2>
    <h2>Total Crypto Revenue</h2>
    <h2>Total Fiat Profit</h2>
    <h2>Total Crypto Profit</h2>
    <h2>Fire Total Average Transaction</h2>
   </div>
 </RolesStyle>
 <RolesStyle>
    <p>Finance</p>
    <div className='mt-3'>
    <h2>Fiat transactions table</h2>
    <h2>Crypto transaction table</h2>
    <h2>Bill payment table</h2>
    <h2>Transactions details</h2>
    </div>
 </RolesStyle>
 <RolesStyle>
    <p>Wallet</p>
    <div className='mt-3'>
    <h2>Can view all wallet balances</h2>
    </div>
 </RolesStyle>
 <RolesStyle>
    <p>Finance</p>
   <div className='mt-3'>
   <h2>Bills Payment</h2>
   </div>
 </RolesStyle>
 <RolesStyle>
    <p>Customers</p>
    <div className='mt-3'>
    <h2>Customer Management</h2>
    </div>
 </RolesStyle>
 <RolesStyle>
    <p>Settings</p>
    <div className='mt-3'>
    <h2>User Management</h2>
    <h2>Roles and Permissions</h2>
    </div>
 </RolesStyle>
    </div>
  )
}

export default AdministratorDetails