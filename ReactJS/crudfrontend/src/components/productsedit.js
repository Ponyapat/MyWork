import React, {useState,useEffect} from 'react';
import { get,put } from 'axios';

const url = 'https://localhost:44303/api/products';

function ProductEdit(props) {
    const iniState = {ProductName: '' , ProductPrice: ''}
    const [product, setProduct] = useState(iniState)

    useEffect(function ()  {
        async function getProduct() {
            try {
                const res = await get (url + '/' + props.match.params.id);
                console.log(res);
                setProduct(res.data);
            }catch (err) {
                console.log('Error :' , err);
            }
        }
        getProduct()
    }, [props]);

    function handleSubmit(e) {
        e.preventDefault();
        async function updateProduct() {
            try {
                const res = await put (url + '/' + product.id , product);
                console.log(res);
                props.history.push('/productslists');
            }catch (err) {
                console.log('Error : ', err);
            }
        }
        updateProduct();
    }

    function cancelProduct() {
        props.history.push('/productslists');
    }

    return (
        <div>
            <h1>Edit Product {product.ProductName}</h1>
            <hr />
            <div class='container'>
                <form onSubmit={handleSubmit}>
                    <div class='form-group'>
                        <label for='ProductName'>Product Name :</label>
                        <input type='text' name='ProductName' id='ProductName' 
                        class='form-control' placeholder='Name'
                        value={product.ProductName} onChange={e => setProduct({ ...product, ProductName: e.target.value })} />
                        </div>
                        <div class='form-group'>
                            <label for='ProductPrice'>Product Price</label>
                            <input type="number" number='ProductPrice' id='ProductPrice'
                            class='form-control' placeholder='Price'
                            value={product.ProductPrice}
                            onChange={e => setProduct({ ...ProductEdit, productPrice: e.target.value})}
                             />
                        </div>
                        <button type='submit' class='btn btn-primary'>Edit Detail</button>
                        <button type='button' class='btn btn-warning' onClick={cancelProduct}>Cancel</button>
                </form>
            </div>
        </div>
    );

}

export default ProductEdit;