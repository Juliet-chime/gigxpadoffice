import React from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { Collapse } from 'antd'
import { PiCaretUp, PiCaretDown } from 'react-icons/pi'
import { color } from '../../assets/color'
import QuidaxContent from './accordionContent/QuidaxContent'

const Wallets = () => {
    const onChange = (key) => {}

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
    const items = [
        {
            key: '1',
            label: (
                <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
                    Quidax
                </p>
            ),
            children: <QuidaxContent />,
        },
        {
            key: '2',
            label: (
                <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
                    Fire Blocks
                </p>
            ),
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: (
                <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
                    Binance
                </p>
            ),
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: (
                <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
                    Baxi
                </p>
            ),
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: (
                <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
                    MapleRad
                </p>
            ),
            children: <p>{text}</p>,
        },
    ]
    return (
        <div>
            <Dashboardheader
                componentName={'Wallets'}
                label={'View wallet balances across all providers'}
                className="mb-6"
            />
            <div>
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
        </div>
    )
}

export default Wallets
