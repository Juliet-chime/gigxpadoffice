import { Collapse } from 'antd'
import React from 'react'
import { PiCaretDown, PiCaretUp } from 'react-icons/pi'
import { IoMdLock } from 'react-icons/io'
import { color } from '../../../assets/color'
import TransactionLimits from './transactionLimit/TransactionLimits'
import OTCRate from './OTCRate/OTCRate'
import FeeStructure from './FeeStructure'

const GlobalConfiguration = ({ setMessage, setStatus }) => {
    const onChange = (key) => { }
    const items = [
        {
            key: '1',
            label: (
                <div className="flex items-center gap-3">
                    <IoMdLock fontSize={18} color={color.mainColor} />
                    <p className="text-mainColor font-medium text-sm">
                        Transaction Limits
                    </p>
                </div>
            ),
            children: <TransactionLimits setMessage={setMessage} setStatus={setStatus} />,
        },
        {
            key: '2',
            label: (
                <div className="flex items-center gap-3">
                    <IoMdLock fontSize={18} color={color.mainColor} />
                    <p className="text-mainColor font-medium text-sm">
                        Fee Structures
                    </p>
                </div>
            ),
            children: <FeeStructure setMessage={setMessage} setStatus={setStatus} />,
        },
        {
            key: '3',
            label: (
                <div className="flex items-center gap-3">
                    <IoMdLock fontSize={18} color={color.mainColor} />
                    <p className="text-mainColor font-medium text-sm">
                        OTC Rates
                    </p>
                </div>
            ),
            children: <OTCRate />,
        },
    ]

    return (
        <div className="config">
            <Collapse
                items={items}
                accordion
                onChange={onChange}
                expandIconPosition={'end'}
                expandIcon={(panelProps) => {
                    return panelProps.isActive ? (
                        <PiCaretUp color={color.mainColor} />
                    ) : (
                        <PiCaretDown color={color.mainColor} />
                    )
                }}
            />
        </div>
    )
}

export default GlobalConfiguration
