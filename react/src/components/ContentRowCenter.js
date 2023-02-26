import React from 'react';
import LastProductDb from './LastProductDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            

            <LastProductDb />

            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;