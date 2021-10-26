import React, {useState} from 'react';
import {post} from 'axios';

function ProductAdd(props) {
    const iniState = { ProductName: '' , ProductPrice: ''};
    const [product, setProduct] = useState(iniState)

    function cancelProduct() {
        props.history.push('/productslists');
    }

    function handleSubmit(e) {
        e.preventDefault();
        async function postProduct() {
            try {
                const res = await post('https://localhost:44303/api/products' ,
                product);
                console.log(res);
                props.history.push('/productlists');
            }catch (err) {
                console.log('Error :' ,err);
            }
        }
        postProduct();
    }

    return(
        <div>
            <h1>Add New Product</h1>
            <div class='container'>
                <form onSubmit={handleSubmit}>
                    <div class='form-group'>
                        <label for='ProductName'>Product Name :</label>
                        <input type="text" name='ProductName' id='productName' 
                        class='form-control' placeholder='Product Name' 
                        value={product.ProductName}
                        onChange={e => setProduct({ ...product, ProductName: e.target.value})} />                        
                    </div>
                    <div class='form-group'>
                        <label for='ProductPrice'>Product Price</label>
                        <input type="number" name='ProductPrice' id='ProductPrice'
                        class='form-control' placeholder='Price'
                        value={product.ProductPrice} 
                        onChange={e => setProduct({ ...product, ProductPrice: parseInt(e.target.value) })} />
                    </div>
                    <button type='submit' class='btn btn-primary'>Add Product</button>
                    <button type='button' class='btn btn-warning' onClick={cancelProduct} >Cancel</button>
                </form>
            </div>
        </div>
    )

}

export default ProductAdd;