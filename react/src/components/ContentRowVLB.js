import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Products in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-truck-loading'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Users in Data Base', 
    color:'success', 
    cuantity: '79',
    icon:'fa-user'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Category in Data Base' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-clipboard-list'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;