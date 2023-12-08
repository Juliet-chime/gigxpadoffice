import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
    background-color: ${(props) => props.bg || 'transparent'};
    border-radius: ${(props) => props.radius};
    border: ${(props) => props.border};
`

const AdminNameDisplay = ({ name, email, initials, ...props }) => {
    return (
        <WrapperStyle
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-0 md:gap-4 p-3 md:p-10 mt-6"
            {...props}
        >
            <div
                className="w-[35px] md:w-[79px] h-[35px] md:h-[79px] bg-[#E2F2F4] flex items-center justify-center"
                style={{ borderRadius: '100%' }}
            >
                <span className="text-main font-bold font-cabinetgrotesk text-[16px] md:text-[24px]">
                    {initials}
                </span>
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-main font-bold font-cabinetgrotesk text-[22px]">
                    {name}
                </h3>
                <h4 className="text-[#162E38] font-semibold text-[10px] md:text-[16px]">
                    {email}
                </h4>
            </div>
        </WrapperStyle>
    )
}

export default AdminNameDisplay
