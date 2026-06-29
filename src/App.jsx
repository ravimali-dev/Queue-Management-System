import Form from './Component/Form'
import Queue from './Component/Queue'
import {useState} from 'react'
import './App.css'


function App(){
  const [customer,setCustomer] = useState([])

 const statusChange = (id) => {
   setCustomer(customer.map((c)=> {
    if(c.id == id){
      return {...c, status: c.status === 'waiting' ? "serving" : 'complete'}
   
    }else{
      return c
    }
   }))
 }

 let deletCustomer = (id) => {
  console.log("function chala!", id) // pehle yeh
  const newArray = customer.filter((c) => c.id !== id)
  console.log(newArray)
  setCustomer(newArray)
}
 
  let handleSubmit = (name, service) =>{
  const newCustomer = {
  id: Date.now(),
  name,
  service,
  status: "waiting",
}
    setCustomer([ newCustomer,...customer])
     console.log(customer)
  }
  
  return (
    <>
    <h1>Queue management system</h1>
    <div className="layout">
      
    <div className="form-panel">
      <Form handleSubmit={handleSubmit} />
    </div>
    <div className="queue-panel" >
     <Queue customerData={customer} statusChange={statusChange} deletCustomor={deletCustomer} />
    </div>
   
    </div>
    </>
  )
}
export default App