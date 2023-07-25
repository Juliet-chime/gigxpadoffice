import React from 'react'
import { DashboardHeaderStyle } from './style'

const Dashboardheader = ({userName,componentName,label}) => {
  return (
    <DashboardHeaderStyle>
      {userName?<p>{userName}</p>:null}
      {componentName?<h2>{componentName}</h2>:null}
      {label ?<h4>{label}</h4>:null}
    </DashboardHeaderStyle>
  )
}

export default Dashboardheader