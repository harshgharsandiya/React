import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
});

function Axios() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // api.get('/products')
        //     .then((res) => setProducts(res.data.products))
        //     .catch((err) => setError(err.message));
        getProducts();
    }, []);

    async function getProducts() {
        try {
            const response = await api.get('/products');
            setProducts(response.data.products);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            {error && error}
            {products.map((product, index) => {
                return (
                    <h3 key={index}>
                        {product.title} - ${product.price}
                    </h3>
                );
            })}
        </>
    );
}

export default Axios;
