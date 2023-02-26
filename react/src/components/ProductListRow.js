import React from 'react';


function ProductListRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.category}</td>
                    <td>{props.color.name}</td>
                    <td>$ {props.price}</td>
                </tr>
            )
    }
    
        

export default ProductListRow;