import React from 'react'
import './Wallet.css';

const Wallet = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Wallet</h1>

      <div  className='table-container'>
         <table className='wallet-table'>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
          <tr>
            <td>Chips</td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
          </tr><tr>
            <td>Lays</td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
          </tr><tr>
            <td>Coke</td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
          </tr><tr>
            <td>Samosa</td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
          </tr><tr>
            <td>Burger</td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
          </tr><tr>
            <td>Pizza</td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
            <td><input type={"number"}/></td>
          </tr>
          <tr>
            <td>Grand Money</td>
             <td> <input  value={"650"}/></td>
            </tr>
            <tr>
            <td>Total Money</td>
              <td><input type={"button"} value={"1000"}/></td>
              <td>Reaming<input type={"button"} value={"1000"}/></td>

          </tr>
         </table>
         </div>
    </div>
  )
}

export default Wallet
