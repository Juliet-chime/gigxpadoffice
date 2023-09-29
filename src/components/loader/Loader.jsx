import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
            color: '#E25A5A'
        }}
        spin
    />
);

const Loader = ({ ...props }) => {
    return (
        <div className='flex items-center justify-center h-[50vh]'>
            <Spin size="large" indicator={antIcon} {...props} />
        </div>
    )
}

export default Loader