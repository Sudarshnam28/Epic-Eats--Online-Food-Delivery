 import React from 'react'
import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center text-white fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive text-white  table-responsive-sm table-responsive-md' >
        <table className='table table-hover text-white  '>
          <thead className=' text-success text-white fs-4'>
            <tr>
              <th  className='text-success' scope='col' >S.No</th>
              <th  className='text-success' scope='col' >Name</th>
              <th  className='text-success' scope='col' >Quantity</th>
              <th  className='text-success' scope='col' >Option</th>
              <th  className='text-success' scope='col' >Amount</th>
              <th  className='text-success' scope='col' ></th>
            </tr>
          </thead>
          <tbody >
            {data.map((food, index) => (
              <tr>
                <th   className='text-white' scope='row' >{index + 1}</th>
                <td className='text-white' >{food.name}</td>
                <td  className='text-white'>{food.qty}</td>
                <td  className='text-white'>{food.size}</td>
                <td  className='text-white'>{food.price}</td>
                <td  className='text-white'><button type="button" className="btn p-0 text-white "><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
   }  
   