import React, { forwardRef, useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader';
import CustomTable from '../../components/table/CustomTable';
import CustomDrawer from '../../components/fields/CustomDrawer';
import { Col, Row } from 'antd';
import Blocks from '../../components/dashboardComponents/Blocks';
import { color } from '../../assets/color';
import OneDateRange from '../../components/chart/OneDateRange';
import { formatDate } from '../../utils/helperFunctions';
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';
import CryptoDetails from '../transactions/CryptoDetails';

const Crypto = () => {

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [changeIcon, setChangeIcon] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'Transaction Id',
      dataIndex: 'trxId',
      key: 'trxId'
    },
    {
      title: 'Sender',
      dataIndex: 'sender',
      key: 'sender'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Transaction Type',
      dataIndex: 'trxType',
      key: 'trxType'
    },
    {
      title: 'Assest',
      dataIndex: 'assest',
      key: 'assest'
    },
    {
      title: 'Transaction Reference',
      dataIndex: 'trxRef',
      key: 'trxRef'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        console.log(text, 'hfhf')
        return <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px', color: `${text === 'success' ? 'green' : 'red'}` }}>{text}</h1>
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      trxId: '112039901',
      sender: 'Harold Ajagu',
      amount: '120,000',
      trxType: 'Credit',
      currency: 'Naira',
      trxRef: '190008377000',
      status: 'success',
      name: `Edward King ${i}`,
      quidaxFee: `N50.00`,
      xpadFee: `N50.00`,
      people: "kadijatt",
      email: 'harold.ajagz@gmail.com',
      time: "22/10/2023, 10:56AM",
      phone: "+23408099089002",
      sourceWallet: 'bn90384999bsuuOUJkl38',
      sourceWalletName: 'Harold Chuwuemeka',
      designationWallet: 'cfx3828883tRss9888932344',
    });
  }

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {

    const newDate = value.split('-')[0].trim()

    const today = formatDate()

    return (
      <p onClick={onClick} ref={ref} className={'rounded-large border border-dateLine py-3 px-6 cursor-pointer flex items-center gap-2 text-mainColor text-sm font-medium '}>
        - Select Date - {newDate === today ? changeIcon ? <PiCaretUp className='text-mainColor text-xl font-medium' /> : <PiCaretDown className='text-mainColor text-xl font-medium' /> : null}
      </p>
    )
  });

  return (
    <div>
      <div className='flex items-center gap-1'>
        <Dashboardheader
          componentName={'Crypto Transactions'}
          label={'Manage and Monitor FIAT transactions'}
        />
        <div>
          <OneDateRange
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            showPopperArrow={false}
            customInput={<ExampleCustomInput />}
            onCalendarOpen={() => setChangeIcon(true)}
            onCalendarClose={() => setChangeIcon(false)}
          />
        </div>
      </div>
      <div className='mt-12 mb-8'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={7} lg={6} xl={6}>
            <Blocks name='Total Crypto Transfers' nameColor={color.mainColor} bigAmount={'858,800'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />
          </Col>
          <Col xs={24} sm={24} md={7} lg={6} xl={6}>
            <Blocks name='Total Crypto Swaps' nameColor={color.mainColor} bigAmount={'858,800'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />
          </Col>
          <Col xs={24} sm={24} md={7} lg={6} xl={6}>
            <Blocks name='Total FIAT to Crypto' nameColor={color.mainColor} bigAmount={'248'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />
          </Col>
        </Row>
      </div>
      <CustomTable
        data={data}
        columns={columns}
        type
        assest
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              showDrawer()
              setDetails(record)
            }, // click row
            onDoubleClick: (event) => { }, // double click row
            onContextMenu: (event) => { }, // right button click row
            onMouseEnter: (event) => { }, // mouse enter row
            onMouseLeave: (event) => { }, // mouse leave row
          };
        }}
      />
      <CustomDrawer placement="right" onClose={onClose} open={open}>
        < CryptoDetails data={details} />
      </CustomDrawer>
    </div>
  )
}

export default Crypto