import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function ProductLists() {
    const [products, setProducts] = useState([]);
    const url = 'https://localhost:44303/api/products';

    useEffect(() => {
        async function getProductLists() {
            try {
                const res = await Axios.get(url);
                setProducts(res.data);
            } catch (err) {
                console.log('Error : ', err);
            }
        }
        getProductLists();
    }, []);

    return (
        <div>
            <div>
                <Link to='/productsadd' class='btn btn-primary float-right'> Add New Product</Link>
                </div>
                <br />
                <br />
                <table class='table'>
                    <thead>
                        <tr>
                            <td>Product ID</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (
                                    <tr>
                                        <td>{product.id}</td>
                                        <td><Link to={'/products/' + product.id}>{product.productName}</Link></td>
                                        <td>{product.productPrice}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    );

    
}

export default ProductLists;