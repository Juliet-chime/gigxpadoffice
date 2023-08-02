import { Tabs } from 'antd';
import React from 'react'
import CNY from '../../../../assets/images/CNY.png'
import USA from '../../../../assets/images/USA.png'
import CAD from '../../../../assets/images/CAD.png'
import OtcChange from './OtcChange';

const OTCRate = () => {
    const items = [
        {
            key: '1',
            label: <div className='flex items-center gap-2'>
                <img src={CNY} alt='CNY' />
                <h3>CNY</h3>
            </div>,
            children: <OtcChange />
        },
        {
            key: '2',
            label: <div className='flex items-center gap-2'>
                <img src={USA} alt='CNY' />
                <h3>USD</h3>
            </div>,
            children: <OtcChange />,
        },
        {
            key: '3',
            label: <div className='flex items-center gap-2'>
                <img src={CAD} alt='CNY' />
                <h3>CAD</h3>
            </div>,
            children: <OtcChange />,
        },
    ];

    return (
        <div className='limits border border-ash-3 rounded-lg p-2 md:p-6 lg:p-6 xl:p-6'>
            <Tabs
                tabPosition={'left'}
                items={items}
            />
        </div>
    )
}

export default OTCRate