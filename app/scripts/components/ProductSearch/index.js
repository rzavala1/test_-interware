import React from 'react';


function productSearch(params) {

    const props = params.props;

    return (
        <>
            <div className='product_search' key={props.key}>
                <img src={props.picture} />
                <div>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default productSearch;