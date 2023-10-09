import StatusTag from "../../components/table/StatusTag"

const TrxDetailsValue = ({ name, value, status }) => {
    return <div className="my-2">
        <p className="text-ash status-sm">{name}</p>
        <h3 className="text-mainColor text-lg font-medium">{value}</h3>
        <StatusTag text={status === 'success' || status === 'successful' ? 'Completed' : status} style={{ marginTop: '8px', width: '80px' }} />
    </div>
}

export default TrxDetailsValue