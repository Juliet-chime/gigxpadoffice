import React from 'react'
import PinInput from 'react-pin-input'
import { useField } from 'formik'
import { color } from '../../assets/color'

const PinInputField = (props) => {
  const [field, meta, helpers] = useField(props.name)
  return (
    <PinInput
      inputStyle={
        props.inputstyle || {
          fontWeight: 'bold',
          color: 'black',
          height: '3.125rem',
          border: `groove 0.5px`,
          background: `${color.fieldColor}`,
          marginLeft: '8px',
          MozAppearance: 'textfield',
          borderRadius: '0.75rem'
        }
      }
      type="numeric"
      focus
      {...field}
      {...meta}
      initialValue={field?.value}
      onChange={(value) => {
        console.log(value)
        helpers.setValue(value)
      }}
      {...props}
    />
  )
}

export default PinInputField