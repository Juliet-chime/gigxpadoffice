import { Col, Row, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { color } from '../../assets/color'
import CustomButton from '../../components/fields/CustomButton'
import CustomerInformation from './CustomerInformation'
import CustomerWalletBalance from './CustomerWalletBalance'
import CustomerKYCDocumentation from './CustomerKYCDocumentation'
import CustomModal from '../../components/modal/CustomModal'
import { IoIosLock } from 'react-icons/io'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import {
    getOneUserSelector,
    queryOneUser,
} from '../../services/slices/user/oneUser'
import { useDispatch, useSelector } from 'react-redux'
import { queryLockAccount } from '../../services/slices/settings/usermanagement/lockAccount'
import { querySuspendAccount } from '../../services/slices/settings/usermanagement/suspendAccount'
import DetailsHeader from '../../components/dashboardComponents/DetailsHeader'
import { queryUnsuspendAccount } from '../../services/slices/settings/usermanagement/unSuspendAccount'

const CustomersDetails = () => {
    const dispatch = useDispatch()

    const user = useSelector(getOneUserSelector)

    const { id } = useParams()

    const onChange = (key) => {
        alert(key)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = (e) => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const items = [
        {
            key: '1',
            label: `Basic Information`,
            children: (
                <CustomerInformation
                    loading={user?.loading}
                    data={user?.user}
                />
            ),
        },
        {
            key: '2',
            label: `Wallet Balances`,
            children: <CustomerWalletBalance />,
        },
        {
            key: '3',
            label: `KYC Documentation`,
            children: <CustomerKYCDocumentation />,
        },
    ]

    const onLockAccount = async () => {

        let data = {
            status: 'locked',
        }

        const res = await dispatch(queryLockAccount({ id, data }))

    }

    const onUnlockAccount = async () => {
        let data = {
            status: 'active',
        }

        const res = await dispatch(queryLockAccount({ id, data }))

    }

    const onUnsuspendAccount = async () => {
        const res = await dispatch(queryUnsuspendAccount({ id }))

    }

    const onSuspendAccount = async () => {
        const res = await dispatch(querySuspendAccount({ id }))

    }

    useEffect(() => {
        async function getFiatTransactions() {
            try {
                dispatch(queryOneUser({ id })).unwrap()
            } catch (e) { }
        }
        getFiatTransactions()
    }, [dispatch, id])
    return (
        <div>
            <Row justify="space-between" gutter={[0, 16]}>
                <Col xs={24} sm={24} md={9} lg={9} xl={10}>
                    <DetailsHeader
                        to="/customers"
                        text={
                            user?.user?.firstName + ' ' + user?.user?.lastName
                        }
                        subText={user?.user?.email}
                    />
                </Col>
                <Col xs={24} sm={24} md={9} lg={6} xl={4}>
                    <div className="flex justify-end gap-3">
                        {!true ? (
                            <CustomButton
                                text={'Unlock Account'}
                                border="1px solid #DBDBDB"
                                color={color.mainColor}
                                radius="25px"
                                onClick={onUnlockAccount}
                            />
                        ) : (
                            <CustomButton
                                text={'Lock Account'}
                                border="1px solid #DBDBDB"
                                color={color.mainColor}
                                radius="25px"
                                onClick={showModal}
                            />
                        )}
                        {!true ? (
                            <CustomButton
                                text={'Account Suspended'}
                                border="1px solid #DBDBDB"
                                color={color.secondaryColor}
                                radius="25px"
                                disabled={true}
                                onClick={onUnsuspendAccount}
                            />
                        ) : (
                            <CustomButton
                                text={'Suspend Account'}
                                border="1px solid #DBDBDB"
                                color={color.secondaryColor}
                                radius="25px"
                                onClick={onSuspendAccount}
                            />
                        )}
                    </div>
                </Col>
            </Row>

            <div className="detailcard mt-12">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
            <CustomModal
                open={isModalOpen}
                width={350}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                {!true ? (
                    <div className="flex flex-col items-center justify-center gap-4 pt-20 pb-10">
                        <div className="w-12 h-12 border border-fieldAsh flex items-center justify-center rounded-full bg-fieldAsh">
                            <IoCheckmarkCircle fontSize={28} color="#4CAF50" />
                        </div>
                        <h2 className="text-xl font-bold font-cabinetgrotesk">
                            Account successfully locked
                        </h2>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 pt-20">
                        <div className="w-16 h-16 border border-fieldAsh flex items-center justify-center rounded-full bg-fieldAsh">
                            <IoIosLock fontSize={24} />
                        </div>
                        <h2 className="text-xl font-bold font-cabinetgrotesk">
                            Lock this account?
                        </h2>
                        <p className="text-lighterAsh text-md text-center">
                            This user will not be able to make any transactions
                            but can however still log into the mobile app
                        </p>
                        <CustomButton
                            text={'Yes, lock account'}
                            bg={color.fieldColor}
                            color={color.accessBtnColor}
                            weight="700"
                            height="3.75rem"
                            className='mt-2'
                            onClick={onLockAccount}
                        />
                    </div>
                )}
            </CustomModal>
        </div>
    )
}

export default CustomersDetails
