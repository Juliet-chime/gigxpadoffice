import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
    background-color: ${(props) => props.bg || 'transparent'};
    border-radius: ${(props) => props.radius};
    border: ${(props) => props.border};
`

const AdminNameDisplay = ({ name, email, initials, padding, ...props }) => {
    return (
        <WrapperStyle
            className={`flex flex-col md:flex-row items-center md:justify-start gap-0 md:gap-4 ${
                padding ? padding : 'md:p-10'
            } p-3 mt-6`}
            {...props}
        >
            <div
                className="w-[40px] md:w-[79px] h-[40px] md:h-[79px] bg-[#E2F2F4] flex items-center justify-center border"
                style={{ borderRadius: '50%' }}
            >
                <p className="text-main font-bold font-cabinetgrotesk text-[16px] md:text-[24px]">
                    {initials}
                </p>
            </div>
            <div className="text-center md:text-left">
                <p className="text-main font-bold font-cabinetgrotesk text-[16px] md:text-[20px]">
                    {name}
                </p>
                <p className="text-[#162E38] font-semibold text-[10px] md:text-[12px] max-w-[210px] break-words">
                    {email}
                </p>
            </div>
        </WrapperStyle>
    )
}

export default AdminNameDisplay
