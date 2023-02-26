import React from 'react';
import { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */





function ContentRowMovies(){
    
    
    const [product, setProduct] = useState([])	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/products/list`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.total);
			})
		.catch(err => console.log(err))
	}, [])

    const [user, setUser] = useState([])	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/users/list`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setUser(data.total);
			})
		.catch(err => console.log(err))
	}, [])
    
    const [color, setColor] = useState([])	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/products/color`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setColor(data.total);
			})
		.catch(err => console.log(err))
	}, [])

    let productsInDb = {
        title: 'Products in Data Base',
        color: 'primary', 
        cuantity: product,
        icon: 'fa-truck-loading'
    }
    
    /* <!-- Total awards --> */
    
    let usersInDb = {
        title:'Users in Data Base', 
        color:'success', 
        cuantity: user,
        icon:'fa-user'
    }
    
    /* <!-- Actors quantity --> */
    
    let colorsInDb = {
        title:'Color in Data Base' ,
        color:'warning',
        cuantity: color,
        icon:'fa-clipboard-list'
    }
    
    let cartProps = [productsInDb, usersInDb, colorsInDb];
    return (
    
        <div className="row">
            
            {cartProps.map( (card, i) => {

                return <SmallCard {...card} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;