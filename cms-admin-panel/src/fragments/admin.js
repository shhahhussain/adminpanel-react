import React from 'react'
import data from './User'
import { useState,useEffect } from 'react'

const Admin=(props) =>{
  let {AdminData}=props
  const [dataSet,updatedataSet]=useState(AdminData)
  return (
    <div>
        <table className="data-body">
        <thead className="data-head">
          <th>Account</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {
            dataSet.map((item,index)=>{
              return <tr className="data-row">
                <td className="data" >{item.role||"empty"}</td>
                <td className="data">{item.firstName||"empty"}  </td>
                <td className="data">{item.lastName || "empty"}</td>
                <td className="data">{item.email||"empty"}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Admin