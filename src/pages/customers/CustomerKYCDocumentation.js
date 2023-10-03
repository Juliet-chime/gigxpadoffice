import { Dropdown } from 'antd'
import React, { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl';
import pdf from '../../assets/images/pdf.svg'
import img from '../../assets/images/image.png'
import CustomButton from '../../components/fields/CustomButton';
import { color } from '../../assets/color';
import CustomDrawer from '../../components/fields/CustomDrawer';
import CustomerDetailsDrawer from './CustomerDetailsDrawer';
import CustomTable from '../../components/table/CustomTable';

const CustomerKYCDocumentation = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const items = [
        {
            key: '1',
            label: (
                <CustomButton height='auto' color={color.mainColor} width='auto' onClick={showDrawer}>
                    View Document
                </CustomButton>
            ),
        },
        {
            key: '2',
            label: (
                <CustomButton height='auto' color={color.mainColor} width='auto'>
                    Download Document
                </CustomButton>
            ),
        },
    ];

    const columns = [
        {
            title: 'Document Title',
            dataIndex: ['title', 'type'],
            key: 'title',
            render: (_, title) => {
                return <div className='flex items-center gap-4'>
                    <div>
                        <img src={title.type === 'pdf' ? pdf : title.type === 'jpg' ? img : null} alt='' />
                    </div>
                    <p> {title.name}</p>
                </div>
            },
        },
        {
            title: 'Document Type',
            dataIndex: 'type',
            key: 'type',
            render: (_, text) => <p> {text.type.toUpperCase()}</p>
        },
        {
            title: 'Date Updated',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <p className={`${text === 'active' ? 'text-statusGreen' : null}`}>{text}</p>
            ),
        },
        {
            title: ' ',
            dataIndex: '',
            key: '',
            render: (_, record) => (
                <div>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        arrow={false}
                        trigger='click'
                    >
                        <div className='cursor-pointer'>
                            <SlOptionsVertical color='#67777E' />
                        </div>
                    </Dropdown>
                </div>
            ),
        },
    ]
    const data = [
        {
            key: '1',
            img: '',
            type: 'pdf',
            name: 'Company_registration_CAC_190234',
            title: 'n',
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '2',
            title: 'n',
            img: '',
            type: 'pdf',
            name: 'Company_registration_CAC_190234',
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '3',
            title: 'b',
            img: '',
            type: 'jpg',
            name: 'Company_registration_CAC_190234',
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '4',
            title: 'b',
            img: '',
            type: 'pdf',
            name: 'Company_registration_CAC_190234',
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
    ];
    return (
        <div className='wallet-table'>
            <CustomTable tableBorder={'none'} columns={columns} dataSource={data}
                pagination={{
                    hideOnSinglePage: true,
                    pageSize: 7,
                }}
            />
            <div className='document'>
                <CustomDrawer placement="right" onClose={onClose} open={open} className='doc'>
                    <CustomerDetailsDrawer title={'Company_registration_CAC_190223.pdf'} date={'23/04/2023, 11:38:00'} />
                </CustomDrawer>
            </div>
        </div>
    )
}

export default CustomerKYCDocumentation