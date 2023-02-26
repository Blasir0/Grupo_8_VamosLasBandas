import React from "react";
import { useState, useEffect } from "react";

function CategoriesInDb() {
  const [product, setProduct] = useState([])
	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/products/color`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.data);
			})
		.catch(err => console.log(err))
	}, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Product color
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
                  <p>{prod.name}</p>
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

export default CategoriesInDb;
