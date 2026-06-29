import React from 'react'
import { useState } from 'react'

function Queue({customerData, statusChange,deletCustomor}) {
   

   
  
  return (
    <div >
      <h3>Current Queue</h3>
      {customerData.map((customer) => {
        return (
          <div key={customer.id} className="customer-card">
          <h3 >{customer.name}</h3>
          <h4>{ customer.service}</h4>
          <p>{customer.status}</p>
          <button onClick={() => statusChange(customer.id) }>{customer.status === "waiting" ? "Serve" : "Complete"}</button>
          <button onClick = {() => deletCustomor(customer.id)}  >Delete</button>
        </div>
        )
        
      })}

     
      
    </div>
  )
}

export default Queue
