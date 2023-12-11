import React from 'react'

const MessageComponent = ({ msg, status }) => {
    return (
        <p
            className={`font-bold mb-4 ${
                status === 'success' ? 'text-[#4CAF50]' : 'text-[#F44336]'
            }`}
        >
            {msg}
        </p>
    )
}

export default MessageComponent
