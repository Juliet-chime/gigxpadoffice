import React from 'react'

const ChartLabels = ({ name, bgColor, number }) => {
    return (
        <div className="flex items-center mb-3">
            <div
                className={`w-2 h-2 ${
                    name === 'Deposits'
                        ? 'bg-deposit'
                        : name === 'Swaps'
                        ? 'bg-swaps'
                        : name === 'Withdrawals'
                        ? 'bg-withdraw'
                        : name === 'Transfers'
                        ? 'bg-transfer'
                        : bgColor
                } mr-2 rounded-full`}
            />
            <div className="text-xs flex items-center gap-2">
                <p>{name}</p>
                {number && (
                    <p className="hidden xl:block text-mainColor text-xs font-bold">
                        {number}
                    </p>
                )}
            </div>
        </div>
    )
}

export default ChartLabels
