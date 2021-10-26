import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'https://localhost:44303/api/products';

function ProductInfo(props) {
    const [product, setProduct] = useState({});

    useEffect(function()  {
        async function getProduct() {
            try {
                const res = await Axios.get(url + '/' + props.match.params.id);
                setProduct(res.data);
            } catch (err) {
                console.log('Error :' , err);
            }
        }
        getProduct();
    }, [props]);

    async function delProduct() {
        try {
            await Axios.delete(url + '/' + props.match.params.id);
            props.history.push("/productlists");
        }catch (err) {
            console.log('Error :' , err);
        }
    }

    return (
        <div>
            <div class='card'>
                <h3 class='card-title'>{product.id}.{product.productName}</h3>
                <div class='btn-group'>
                    <Link to={'/productsedit' + product.id} class='btn btn-primary'>Edit</Link>
                    <button onClick={delProduct} class='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    )


}

export default ProductInfo;
