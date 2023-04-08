import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <h1>This is shop</h1>
        </div>
    );
};

export default Shop;