import React, { useEffect, useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { Collapse } from 'antd'
import { PiCaretUp, PiCaretDown } from 'react-icons/pi'
import { color } from '../../assets/color'
import { useDispatch } from 'react-redux'
import { queryFireBlockTrxCard } from '../../services/slices/ledger/blocksTrxCard'
import { queryFireBlockSavingCard } from '../../services/slices/ledger/blocksSavingCard'
import FireBlockContent from './accordionContent/FireBlockContent'

const Wallets = () => {
    const onChange = (key) => {}

    const [fireBlockUSDTrx, setFireBlockUSDTrx] = useState(null)
    const [fireBlockUSDSaving, setFireBlockUSDSaving] = useState(null)
    const [fireBlockBTCTrx, setFireBlockBTCTrx] = useState(null)
    const [fireBlockBTCSaving, setFireBlockBTCSaving] = useState(null)
    const [loadingLedger, setLoadingLedger] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        async function getWalletData() {
            setLoadingLedger(true)
            try {
                const res = await Promise.allSettled([
                    dispatch(
                        queryFireBlockTrxCard({ currency: 'usdt' })
                    ).unwrap(),
                    dispatch(
                        queryFireBlockSavingCard({ currency: 'usdt' })
                    ).unwrap(),
                    dispatch(
                        queryFireBlockTrxCard({ currency: 'btc' })
                    ).unwrap(),
                    dispatch(
                        queryFireBlockSavingCard({ currency: 'btc' })
                    ).unwrap(),
                ])
                setFireBlockUSDTrx((res || [])[0]?.value)
                setFireBlockUSDSaving((res || [])[1]?.value)
                setFireBlockBTCTrx((res || [])[2]?.value)
                setFireBlockBTCSaving((res || [])[3]?.value)
            } catch (e) {
                console.log(e)
            } finally {
                setLoadingLedger(false)
            }
        }
        getWalletData()
    }, [dispatch])

    //     const text = `
    //  A dog is a type of domesticated animal.
    //  Known for its loyalty and faithfulness,
    //  it can be found as a welcome guest in many households across the world.
    // `
    const items = [
        {
            key: '1',
            label: (
                <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
                    Fire Blocks
                </p>
            ),
            children: (
                <FireBlockContent
                   fireBlockUSDTrx={fireBlockUSDTrx}
                    fireBlockUSDSaving={fireBlockUSDSaving}
                    fireBlockBTCTrx={fireBlockBTCTrx}
                    fireBlockBTCSaving={fireBlockBTCSaving}
                    loading={loadingLedger}
                />
            ),
        },
        // {
        //     key: '2',
        //     label: (
        //         <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
        //             Quidax
        //         </p>
        //     ),
        //     children: <p>{text}</p>,
        // },
        // {
        //     key: '3',
        //     label: (
        //         <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
        //             Binance
        //         </p>
        //     ),
        //     children: <p>{text}</p>,
        // },
        // {
        //     key: '4',
        //     label: (
        //         <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
        //             Baxi
        //         </p>
        //     ),
        //     children: <p>{text}</p>,
        // },
        // {
        //     key: '5',
        //     label: (
        //         <p className="text-mainColor font-bold font-cabinetgrotesk text-xl">
        //             MapleRad
        //         </p>
        //     ),
        //     children: <p>{text}</p>,
        // },
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