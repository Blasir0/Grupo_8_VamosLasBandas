import React from "react";
import { useEffect, useState} from 'react'
import ProductListRow from "./ProductListRow";

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
    <div className="card shadow mb-4">
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                    product.map( ( row , i) => {
                        return <ProductListRow { ...row} key={i}/>
                    })
                    }

                </tbody>
            </table>
        </div>
    </div>
</div>
  );
}

export default ProductList;
