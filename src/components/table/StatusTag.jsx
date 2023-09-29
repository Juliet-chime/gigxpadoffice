import React from 'react'

const StatusTag = ({ text }) => {
    return (
        <h1 className={`${text === 'success' || text === 'successful' ? 'bg-[#E8FFF7]' : text === 'failed' ? 'bg-[#ff14141a]' : text === 'pending' ? 'bg-[#ea7d1f1a]' : null} ${text === 'success' || text === 'successful' ? 'text-[#27B785]' : text === 'failed' ? 'text-[#FF1414]' : text === 'pending' ? 'text-[#EA7D1F]' : null} rounded-[6px] text-center py-1 px-2 uppercase font-bold text-[10px]`}>{text === 'successful' ? 'success' : text}</h1>
    )
}

export default StatusTag