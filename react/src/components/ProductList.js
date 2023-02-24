import React from "react";
import { useEffect, useState} from 'react'

function ProductList() {
  const [product, setProduct] = useState([])
	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/products/list`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.data);
			})
		.catch(err => console.log(err))
	}, [])

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Product List
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

        {
        product.map((prod, i)=> { 
          return (
            
          <div className="col-lg-6 mb-4" key={i}>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  <h2>{prod.name}</h2>
                  <p>$ {prod.price}</p>
                </div>
              </div>
          </div>
          
          )
          })
        }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
