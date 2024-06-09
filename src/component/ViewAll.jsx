import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState({"quotes": []})
                const fetchData=()=>{
                    axios.get("https://dummyjson.com/quotes").then(
                        (response)=>{
                            changeData(response.data)
                        }
                    ).catch().finally()

                }
               
              
useEffect(()=>fetchData(),[])    
  return (
    <div>
        <Navbar/>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-success table-striped">
                <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">ID</th>
      <th scope="col">QUOTE</th>
      <th scope="col">AUTHOR</th>
    </tr>
  </thead>
  <tbody>
   {data.quotes.map(
    (value,index)=>{
        return  <tr>
       <th scope="row">{index+1}</th>
        <td>{value.id}</td>
        <td>{value.quote}</td>
        <td>{value.author}</td>
      </tr>
    }
   )
   }
    
  </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll