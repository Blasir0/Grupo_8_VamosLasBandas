import React from 'react';
import { useEffect, useState} from 'react'


function LastProductDb(){

    const [product, setProduct] = useState([])
	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/products/lastProduct`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.data[0]);
			})
		.catch(err => console.log(err))
	}, [])


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={`http://localhost:3030/images/products/${product.image}`} style={{width: 40 +'rem'}} alt=" product "/>
                    </div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3 className=''>$ {product.price}</h3>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href='/'>View product detail</a>
                </div>
            </div>
        </div>

        
    )
}

export default LastProductDb;
