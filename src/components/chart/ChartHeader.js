import React from 'react'
import { ChartHeaderStyle } from './style'
import CustomTab from '../tabination/CustomTab';
import OneDateRange from './OneDateRange';

const ChartHeader = ({ details, label, amount, tab, items, today }) => {

    // const styles = {
    //     background: '#F2F3F4',
    //     borderRadius: '17px',
    //     padding:'0px 20px',
    // }

    return (
        <ChartHeaderStyle tab={tab}>
            {details ? <div>
                <p>{label}</p>
                <h2>{amount}</h2>
            </div> : null}
            {tab ? <div className='ss' style={{ width: '100%' }}>
                <CustomTab items={items} />
            </div> : null}
            {today ? <div className='today'>
                <OneDateRange />
            </div> : null}

        </ChartHeaderStyle>
    )
}

export default ChartHeader