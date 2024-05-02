// Product.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, setLoading, setError } from '../redux/slices/productSlices';
import '../styles/product.css';

const Product = () => {
    const dispatch = useDispatch();
    const { items: productItems, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(setLoading(true));
        fetch('https://picsum.photos/v2/list?page=1&limit=10')
            .then(response => response.json())
            .then(data => {
                const items = data.map(item => ({
                    id: item.id,
                    name: `Photo and Production by ${item.author}`,
                    image: item.download_url,
                }));
                dispatch(setItems(items));
                dispatch(setLoading(false));
            })
            .catch(error => {
                console.error('Error fetching data from Lorem Picsum:', error);
                dispatch(setError(error.toString()));
                dispatch(setLoading(false));
            });
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="product">
            <h1>Our Product</h1>
            <div className="product-grid">
                {productItems.map(item => (
                    <div key={item.id} className="product-item">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
