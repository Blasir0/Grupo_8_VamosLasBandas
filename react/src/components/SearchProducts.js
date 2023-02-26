import React from 'react';
import { useEffect, useState, useRef } from 'react';

function SearchProduct(){

	const [products, setProduct] = useState([])
	const [keyword, setKeyword] = useState('')
	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/products/list`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.Search);
			})
		.catch(err => console.log(err))
	}, [keyword])

	const input = useRef()

	const search = e => {
		e.preventDefault()
		let inputValue = input.current.value
		setKeyword(inputValue)
	}

	return(
		<div className="container-fluid">
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">

							<form method="GET" onKeyUp={search}>
								<div className="form-group">
									<label htmlFor="">Search for name:</label>
									<input ref={input} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Product for the word: {keyword}</h2>
						</div>

						{
							products !== undefined ? products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.image}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.price}</p>
											</div>
										</div>
									</div>
								)
							})
							: null}
					</div>
					{ products === undefined && <div className="alert alert-warning text-center">Product not found</div>}
				</>
		</div>
	)
}

export default SearchProduct;
