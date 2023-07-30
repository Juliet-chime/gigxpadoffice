import React, { useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { Tabs } from 'antd';
import UserManagement from './UserManagement';
import AddAUser from './AddAUser';

const Settings = () => {

  const [addUser, setAddUser] = useState(false)

  const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `User Management`,
        children: < UserManagement setAddUser={setAddUser}/>
    },
    {
        key: '2',
        label: `Roles and Permissions`,
        children: <h5>dxtrtr</h5>,
    },
    {
        key: '3',
        label: `Global Configuration`,
        children: <h6>gfhj</h6>,
    },
];

  return (
    <div>
      {addUser ? <AddAUser setAddUser={setAddUser}/> : <><Dashboardheader
        componentName={'System Settings'}
        label={'Manage and control all system and dashboard settings'}
        className='mb-6'
      />
       <div className='detailcard mt-12'>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
       </div></>}
    </div>
  )
}

export default Settings