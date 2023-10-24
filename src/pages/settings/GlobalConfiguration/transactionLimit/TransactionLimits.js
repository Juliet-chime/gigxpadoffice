import { Tabs } from 'antd'
import React from 'react'
import Tier from './Tier'

const TransactionLimits = () => {
    const items = [
        {
            key: '1',
            label: `Tier 1`,
            children: <Tier />,
        },
        {
            key: '2',
            label: `Tier 2`,
            children: <Tier />,
        },
        {
            key: '3',
            label: `Tier 3`,
            children: <Tier />,
        },
    ]

    return (
        <div className="limits border border-ash-3 rounded-lg p-2 md:p-6 lg:p-6 xl:p-6">
            <Tabs tabPosition={'left'} items={items} />
        </div>
    )
}

export default TransactionLimits
