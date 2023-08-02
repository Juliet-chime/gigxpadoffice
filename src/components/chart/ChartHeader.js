import React from 'react'
import { ChartHeaderStyle } from './style'
import CustomTab from '../tabination/CustomTab';

const ChartHeader = ({ details, label, amount, tab, items, today, ...props }) => {

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
            {/* {tab ? <div className='ss' style={{ width: '100%' }}>
                <CustomTab items={items} />
            </div> : null} */}
        </ChartHeaderStyle>
    )
}

export default ChartHeader