import React from 'react'
import CheckField from '../../components/fields/CheckField'

const AccessTitle = ({ name, onChange, checked, titleChecked }) => {
    return (
        <div className="flex items-center justify-between access-title py-2">
            <h5
                className={` ${
                    titleChecked ? 'text-mainColor' : 'text-lighterAsh'
                } text-[12px] font-normal`}
            >
                {name}
            </h5>
            <CheckField onChange={onChange} checked={checked} />
        </div>
    )
}

export default AccessTitle
