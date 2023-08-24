import React, { useState, useEffect} from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { Tabs } from 'antd';
import UserManagement from './UserManagement';
import AddAUser from './AddAUser';
import RolesPermission from './RolesPermission';
import GlobalConfiguration from './GlobalConfiguration/GlobalConfiguration';
import { useDispatch } from 'react-redux';
import { queryRoles } from '../../services/slices/roles/fetchRoles';

const Settings = () => {

  const dispatch = useDispatch()

  const [addUser, setAddUser] = useState(false)

  const onChangeTab = (key) => {
    console.log(key);
  };

  useEffect(() => {
    const fetchRoles = async() => {
      try {
        const res = await dispatch(queryRoles()).unwrap()
        console.log(res,'res')
      } catch (e) {
        throw e
      }
    }
    
fetchRoles()
  }, [dispatch])
  
  const items = [
    {
      key: '1',
      label: `User Management`,
      children: < UserManagement setAddUser={setAddUser} />
    },
    {
      key: '2',
      label: `Roles and Permissions`,
      children: <RolesPermission />,
    },
    {
      key: '3',
      label: `Global Configuration`,
      children: <GlobalConfiguration />,
    },
  ];

  return (
    <div>
      {addUser ? <AddAUser setAddUser={setAddUser} /> : <><Dashboardheader
        componentName={'System Settings'}
        label={'Manage and control all system and dashboard settings'}
        className='mb-6'
      />
        <div className='detailcard mt-12'>
          <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
        </div></>}

    </div>
  )
}

export default Settings