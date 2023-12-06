import { Col, Row } from 'antd'
import React, { useState } from 'react'
import CustomInputField from '../../../components/fields/CustomField'
import { color } from '../../../assets/color'
import CustomButton from '../../../components/fields/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { filterCurrencies } from '../../../utils/func'
import { getCurrenciesSelector } from '../../../services/slices/misc/getCurrencies'
import CurrencyDropdown from '../../../components/dashboardComponents/CurrencyDropdown'
import { feeOptions } from '../../../utils/constants'
import CustomSelect from '../../../components/fields/CustomSelect'
import { queryUpdateFee } from '../../../services/slices/settings/globalconfig/updateFee'
import Loader from '../../../components/loader/Loader'

const FeeStructure = () => {
    const dispatch = useDispatch()
    const { currencies, loading: isCurrencyLoading } = useSelector(
        getCurrenciesSelector
    )
    const [isLoadingLimit, setIsLoadingLimit] = useState(false)
    const fiatCurrencyOption = filterCurrencies({ currencies, str: 'crypto' })

    const [limitType, setLimitType] = useState((feeOptions || [])[0].value)
    const [fiatCurrency, setFiatCurrency] = useState(
        (fiatCurrencyOption || [])[0]?.symbol
    )
    const [fiatName, setFiatName] = useState(
        (fiatCurrencyOption || [])[0]?.name
    )
    // const [billPayment, setBillPayment] = useState('')
    const [fee, setFee] = useState('')

    const onChangeFiatCurrency = (currency, name) => {
        setFiatCurrency(currency)
        setFiatName(name)
    }
    const onChangeFeeOptions = (value) => {
        setLimitType(value)
    }

    // const onUpdateBillPayment = async () => {
    //     await dispatch(queryUpdateFee({ data }))
    // }

    const onUpdateWithdrawalFee = async () => {
        const data = {
            feeType: 'fiatTransaction',
            feeMethod: limitType === 'percentage' ? 'percentageFee' : 'flatFee',
            currencyShortCode: fiatCurrency,
            ...(limitType === 'percentage'
                ? { percentageFee: Number(fee) }
                : { amountFee: Number(fee) }),
        }
        try {
            setIsLoadingLimit(true)
            console.log('submitting for withdrawl')
            await dispatch(queryUpdateFee({ data }))
            setIsLoadingLimit(false)
        } catch (e) {
            console.log(e)
            setIsLoadingLimit(false)
        }
    }

    return (
        <div className="border border-ash-3 rounded-lg p-2 md:p-6 lg:p-6 xl:p-6">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="border border-ash-3 rounded-24">
                        <h2 className="border-b border-ash-3 font-medium text-mainColor text-sm p-6 pt-6 pb-3">
                            CRYPTO FEES
                        </h2>
                        <div className="p-6">
                            <div>
                                <h3 className="text-sm font-semibold text-black-200 mb-4">
                                    Swap Fee
                                </h3>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <CustomInputField
                                                placeholder="FIAT to Crypto"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <CustomInputField
                                                placeholder="Crypto to FIAT"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                </Row>{' '}
                                <div className="flex justify-end mt-5">
                                    <CustomButton
                                        width="181px"
                                        bg={color.secondaryColor}
                                        text="Apply Changes"
                                    />
                                </div>
                            </div>
                            <br />
                            <div>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                                Buy Crypto Fee
                                            </h3>
                                            <CustomInputField
                                                placeholder="Amount"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                                Send Crypto Fee
                                            </h3>
                                            <CustomInputField
                                                placeholder="Amount"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="flex justify-end mt-5">
                                    <CustomButton
                                        width="181px"
                                        bg={color.secondaryColor}
                                        text="Apply Changes"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="border border-ash-3 rounded-24">
                        <div className="flex justify-between items-center border-b border-ash-3 p-6 pt-1 pb-3">
                            <h2 className=" font-medium text-mainColor text-sm ">
                                FIAT FEES
                            </h2>
                            <div className="flex items-center gap-5">
                                <div className="roundedSelect">
                                    <CustomSelect
                                        value={limitType}
                                        options={feeOptions}
                                        onChange={onChangeFeeOptions}
                                        width="130px"
                                    />
                                </div>

                                <CurrencyDropdown
                                    isCurrencyLoading={isCurrencyLoading}
                                    options={fiatCurrencyOption}
                                    currency={fiatCurrency}
                                    currencyName={fiatName}
                                    onChangeCurrency={onChangeFiatCurrency}
                                />
                            </div>
                        </div>

                        <div className="p-6">
                            {/* <div>
                                <h3 className="text-sm font-semibold text-black-200 mb-4">
                                    Bill Payment
                                </h3>
                                <CustomInputField
                                    placeholder="Fee Amount (%)"
                                    bg={color.fieldColor}
                                    radius="12px"
                                    type={'number'}
                                    onChange={(e) =>
                                        setBillPayment(e.target.value)
                                    }
                                />
                                <div className="flex justify-end mt-5">
                                    <CustomButton
                                        width="181px"
                                        bg={color.secondaryColor}
                                        text="Apply Changes"
                                        onClick={onUpdateBillPayment}
                                        disabled={!billPayment}
                                    />
                                </div>
                            </div> */}
                            <br />

                            <div>
                                <h3 className="text-sm font-semibold text-black-200 mb-4">
                                    Withdrawal
                                </h3>
                                <CustomInputField
                                    placeholder="Fee Amount (%)"
                                    bg={color.fieldColor}
                                    radius="12px"
                                    onChange={(e) => setFee(e.target.value)}
                                    type={'number'}
                                />
                                <div className="flex justify-end mt-5">
                                    <CustomButton
                                        width="181px"
                                        bg={color.secondaryColor}
                                        text={'Apply Changes'}
                                        loading={isLoadingLimit}
                                        disabled={!fee}
                                        onClick={onUpdateWithdrawalFee}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FeeStructure
