import React from 'react'
import {useState} from 'react'


const Form = ({handleSubmit}) => {
  const [name, setName] = useState('')
  const [service, setservice] = useState('')
function handleFormSubmit(e) {
  e.preventDefault()
  handleSubmit(name, service)
   // App wala function call ho gaya!
   setName('')
   setservice('')
}
  
  return (
    <div>
      <h3>Add to Queue</h3>
      <form onSubmit={handleFormSubmit} >
          <input type="text" placeholder='customer Name' value={name} onChange={(e) => setName(e.target.value)} />
          <select name="" id="" value={service} onChange={(e) => setservice(e.target.value)}>
            <option value="">Select Service</option>
            <option value="Help">Help</option>
            
            <option value="consulting">consulting</option>
            <option value="payment">payment</option>
          </select>
          <button>Add Customer</button>

      </form>
    </div>
  )
}

export default Form
