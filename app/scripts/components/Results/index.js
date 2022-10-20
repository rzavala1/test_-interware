import React, { useContext, useEffect } from 'react';
import ProductSearch from '../ProductSearch';
import UserContext from "../../context/UserContext";

function resultsSearch() {

    const ctx = useContext(UserContext);
    const { results } = ctx;

    useEffect(() => {
        console.info(results)
    }, [results]);

    return (
        <>
            <div className='cont_results'>
                {results.map((obj,index) => {
                    return <ProductSearch props={obj} key={index}/>
                })}
            </div>
        </>
    );
}

export default resultsSearch;