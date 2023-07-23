import React from 'react'
import { DashboardHeaderStyle } from './style'

const Dashboardheader = ({userName,componentName}) => {
  return (
    <DashboardHeaderStyle>
      {userName?<p>{userName}</p>:null}
      {componentName?<h2>{componentName}</h2>:null}
    </DashboardHeaderStyle>
  )
}

export default Dashboardheader