import React from 'react'
import PinInput from 'react-pin-input'
import { useField } from 'formik'

const PinInputField = (props) => {
    const [field, meta, helpers] = useField(props.name)
  return (
    <PinInput
    // inputStyle={
    //   props.inputstyle || {
    //     fontWeight: 'bold',
    //     color: 'black',
    //     height: '40px',
    //     border: 'none',
    //     marginLeft: '10px',
    //     MozAppearance: 'textfield',
    //     borderBottom: `1px solid ${colors.pinBorderColor}`,
    //   }
    // }
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