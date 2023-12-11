import StatusTag from '../../components/table/StatusTag'

const TrxDetailsValue = ({ name, value, status, tag }) => {
    const Tag = tag
    return (
        <div className="my-2">
            <p className="text-ash status-sm">{name}</p>
            <div>
                <h3 className="text-mainColor text-lg font-medium">{value}</h3>
                {tag && <Tag />}
            </div>

            <StatusTag
                text={
                    status === 'success' || status === 'successful'
                        ? 'Completed'
                        : status
                }
                style={{ marginTop: '8px', width: '80px' }}
            />
        </div>
    )
}

export default TrxDetailsValue
