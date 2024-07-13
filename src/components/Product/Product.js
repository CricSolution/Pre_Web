import React from 'react'
import "./product.css"
import img from "../../assests/product/product1.jfif"
import { Link } from 'react-router-dom'
import Modal from './Model'



const product=[
  {
    img:"",
     name:"White Balls",
     price:"320",
     description:"High quality white cricket balls that can be used in professional matches for more than 40 overs"
  },
  {
    img:"",
     name:"Red Balls",
     price:"300",
     description:"High quality red cricket balls that can be used in professional matches for more than 40 overs"
  },
  {
    img:"",
     name:"Umpire Jerseys",
     price:"1200",
     description:"CricSolution Merchandise T-shirt and Track pant with high quality digital printing"
  },
  {
    img:"",
     name:"Umpire Hat",
     price:"350",
     description:"CricSolution merchandise umpire hat with high quality digitally printed logo"
  },
]

function Product() {
  return (
    <div className="container-product">
    {product.map((product,ind)=>{
        return <>
        <div className="card-product">
      <img src={img} alt="" />
      <div className="card-body">
        <div className="row-product">
          <div className="card-title" >
            <h4>{product.name}</h4>
            <h3>Rs. {product.price}</h3>
          </div>
          <div className="view-btn">
            {/* <a href>View Details</a> */}
          </div>
        </div>
        <hr />
        <p>
         {product.description}
        </p>
        <div className="btn-group button-product">
         <div className='btn'>
            <Link to="" className='link'><Modal/></Link>
          </div>
        </div>
      </div>
    </div>
        </>
    })}
  </div>
  )
}

export default Product 