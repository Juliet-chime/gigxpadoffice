import { Tabs } from 'antd'
import React, { useState } from 'react'
import OtcChange from './OtcChange'
import { useDispatch, useSelector } from 'react-redux'
import { getRatesSelector } from '../../../../services/slices/settings/globalconfig/getRate'
import ReactCountryFlag from 'react-country-flag'
import { queryUpdateRates } from '../../../../services/slices/settings/globalconfig/updateRate'

const OTCRate = () => {
    const { rates } = useSelector(getRatesSelector)

    const dispatch = useDispatch()

    const [activeKey, setActiveKey] = useState(1)
    const [loading, setLoading] = useState(false)

    const [initialRate, setInitialRate] = useState(
        rates.find((_, index) => index + 1 === Number(activeKey))
    )

    const [rateValue, setRateValue] = useState(initialRate?.rate)

    const currencies = rates.map((item) => item?.currencyPair.split('/')[0])

    const onChangeRate = async () => {
        let data = {
            currencyPair: initialRate.currencyPair,
            rate: rateValue,
        }

        try {
            setLoading(true)
            const res = await dispatch(queryUpdateRates({ data }))
            setLoading(false)
            console.log(res)
        } catch (e) {
            setLoading(false)
        }
    }

    const items = currencies.map((curr, index) => {
        return {
            key: index + 1,
            label: (
                <div className="flex items-center gap-2">
                    <ReactCountryFlag countryCode={curr.slice(0, 2)} svg />
                    <h3>{curr}</h3>
                </div>
            ),
            children: (
                <OtcChange
                    currencyName={currencies[activeKey - 1]}
                    rateValue={rateValue}
                    setRateValue={setRateValue}
                    onChangeRate={onChangeRate}
                    loading={loading}
                />
            ),
        }
    })

    // const items = [
    //     {
    //         key: '1',
    //         label: (
    //             <div className="flex items-center gap-2">
    //                 <img src={CNY} alt="CNY" />
    //                 <h3>CNY</h3>
    //             </div>
    //         ),
    //         children: <OtcChange />,
    //     },
    //     {
    //         key: '2',
    //         label: (
    //             <div className="flex items-center gap-2">
    //                 <img src={USA} alt="CNY" />
    //                 <h3>USD</h3>
    //             </div>
    //         ),
    //         children: <OtcChange />,
    //     },
    //     {
    //         key: '3',
    //         label: (
    //             <div className="flex items-center gap-2">
    //                 <img src={CAD} alt="CNY" />
    //                 <h3>CAD</h3>
    //             </div>
    //         ),
    //         children: <OtcChange />,
    //     },
    // ]
    return (
        <div className="limits border border-ash-3 rounded-lg p-2 md:p-6 lg:p-6 xl:p-6">
            <Tabs
                tabPosition={'left'}
                items={items}
                onChange={(key) => {
                    setActiveKey(Number(key))
                    const updateData = rates.find(
                        (_, index) => index + 1 === Number(key)
                    )
                    setInitialRate(updateData)
                    setRateValue(updateData?.rate)
                }}
            />
        </div>
    )
}

export default OTCRate
