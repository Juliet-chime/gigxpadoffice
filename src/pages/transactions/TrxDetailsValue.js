const TrxDetailsValue = ({ name, value, status }) => {
    return <div className="my-2">
        <p className="text-ash status-sm">{name}</p>
        <h3 className="text-mainColor text-lg font-medium">{value}</h3>
        <p className="mt-1" style={{ textTransform: 'uppercase', padding: "8px 10px", width: "90px", fontWeight: 'bold', fontSize: '10px', color: `${status === 'Completed' ? '#27B785' : status === 'Pending' ? '#EA7D1F' : status === 'Failed' ? '#FF1414' : null}`, background: `${status === 'Completed' ? '#E8FFF7' : status === 'Pending' ? '#ffe7e7' : status === 'Failed' ? '#FFE7E7' : null}` }}>{status}</p>
    </div>
}

export default TrxDetailsValue