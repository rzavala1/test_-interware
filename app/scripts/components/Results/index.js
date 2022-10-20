import React, { useContext, useEffect, useState } from 'react';
import ProductSearch from '../ProductSearch';
import UserContext from "../../context/UserContext";

function resultsSearch() {

    const ctx = useContext(UserContext);
    const { results } = ctx;
    const [resultsVisible, setResultsVisible] = useState([]);

    useEffect(() => {
        if (results.length > 4) {
            setResultsVisible(results.slice(0, 4))
        }
    }, [results]);

    return (
        <>
            <div className='cont_results'>
                {results.length > 0 ?
                    resultsVisible.map((obj, index) => {
                        return <ProductSearch props={obj} key={index} />
                    }) :
                    <div className='more_products'>No se encontraron coincidencias</div>
                }

            </div>
            {results.length > 4 ? <div className='more_products'>Ver más productos</div> : null}
        </>
    );
}

export default resultsSearch;