import { Tabs } from 'antd'
import React, { useState } from 'react'
import Tier from './Tier'

const TransactionLimits = ({ setMessage, setStatus }) => {
    const [level, setLevel] = useState(1)

    const items = [
        {
            key: '1',
            label: `Tier 1`,
            children: <Tier level={level} setMessage={setMessage} setStatus={setStatus} />,
        },
        {
            key: '2',
            label: `Tier 2`,
            children: <Tier level={level} setMessage={setMessage} setStatus={setStatus} />,
        },
        {
            key: '3',
            label: `Tier 3`,
            children: <Tier level={level} setMessage={setMessage} setStatus={setStatus} />,
        },
    ]

    return (
        <div className="limits border border-ash-3 rounded-lg p-2 md:p-6 lg:p-6 xl:p-6">
            <Tabs
                tabPosition={'left'}
                items={items}
                onChange={(key) => {
                    setLevel(Number(key))
                }}
            />
        </div>
    )
}

export default TransactionLimits
