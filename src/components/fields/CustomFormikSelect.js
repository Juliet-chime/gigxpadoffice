import React from 'react'
import { FormikSelectStyle } from './style'

const CustomFormikSelect = (props) => {
    return (
        <div className="formik-select">
            <FormikSelectStyle {...props} />
        </div>
    )
}

export default CustomFormikSelect
