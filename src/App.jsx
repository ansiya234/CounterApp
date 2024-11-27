import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement ,reset, incrementByAmount } from './Redux/counterSlice'
import { useState } from 'react'


function App() {

  const [amount ,setAmount]=useState(0)

  const dispatch=useDispatch()

 const {count}= useSelector((state)=>state.counterReducer)

 const handleincrementByAmount=()=>{
  if (amount){
    dispatch(incrementByAmount(Number(amount)))
  }
  else{
    alert("Please enter the amount")
  }
 }


  return (
    <>
      <div className='d-flex p-10 align-items-center justify-content-center flex-column' style={{ textAlign: 'center', color: 'white' }}>
        <h2 style={{ marginTop: '20px' }}>Counter App</h2>
        <div className='align-items-center' style={{ border: '2px solid', borderRadius: '10px', padding: '40px' }}>
        <h3>{count}</h3>

          <div className='d-flex justify-content-between mt-4'>
            <button onClick={()=>dispatch((decrement()))} style={{ backgroundColor: 'Green', padding: '5px', borderRadius: '5px' }}>Decrement</button>
            <button onClick={()=>dispatch((reset()))} style={{ backgroundColor: 'Yellow', padding: '5px', borderRadius: '5px' }}>Reset</button>
            <button onClick={()=>dispatch((increment()))} style={{ backgroundColor: 'Red', padding: '5px', borderRadius: '5px' }}>Increment</button>
          </div><br />

          <div>
            <input type="text" onChange={(e)=>setAmount(e.target.value)} style={{ padding: '10px', borderRadius: '10px', width: '280px' }} placeholder='incremented  counter amount' /> <br /> <br />
            <button onClick={handleincrementByAmount} style={{ backgroundColor: 'skyblue', padding: '7px', borderRadius: '10px' }}>increment amount</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
