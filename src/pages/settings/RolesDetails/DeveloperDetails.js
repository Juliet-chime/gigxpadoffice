import React from 'react'
import { RolesStyle } from '../style'

const DeveloperDetails = () => {
    return (
        <div>
            <h2 className='text-xl font-bold py-3 font-cabinetgrotesk'>Developer</h2>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Dashboard</p>
                    <h2>Over View</h2>
                </div>
                <p>Read Only</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Finance</p>
                    <h2>FIAT Transactions</h2>
                </div>
                <p>None</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Finance</p>
                    <h2>Crypto Transactions</h2>
                </div>
                <p>None</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Finance</p>
                    <h2>Bills Payment</h2>
                </div>
                <p>None</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Wallets</p>
                    <h2>All Wallet</h2>
                </div>
                <p>Read Only</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Customers</p>
                    <h2>Customer Management</h2>
                </div>
                <p>Read Only</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Settings</p>
                    <h2>User Management</h2>
                </div>
                <p>None</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Settings</p>
                    <h2>Roles and Permissions</h2>
                </div>
                <p>None</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Settings</p>
                    <h2>Global Configurations</h2>
                </div>
                <p>Read Only</p>
            </RolesStyle>
            <RolesStyle className='flex items-center justify-between'>
                <div>
                    <p className='mb-0'>Virtual Cards</p>
                    <h2>Virtual Cards</h2>
                </div>
                <p>None</p>
            </RolesStyle>
        </div>
    )
}

export default DeveloperDetails