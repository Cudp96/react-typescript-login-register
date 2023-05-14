import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../../Services/axios.service';
import Navbar from '../../components/navbar';
import { useDispatch } from 'react-redux';
import { add } from '../../components/Product/productSlice';


const ProductPage = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    // console.log(params);
    // console.log(params.id);
    const dispatch = useDispatch();

    const getProduct = async () => {
        const response = await getSingleProduct(params.id);
        setProduct(response);
    }
    // console.log(product);
    useEffect(() => {
        getProduct();
    }, [])

    const addHandle = (product: any) => {
        dispatch(add(product));
    }
    return (
        <>
            <Navbar />
            <Link to='/dashboard'><Button>Back</Button></Link>
            <div className="product">
                <div className="image">
                </div>
                <img src={product.images} alt="" />
                <div className="details">
                    <h2>{product.title} <span className='span'>{product.category.name}</span></h2>
                    <p>{product.description}</p>
                    <h3>$ {product.price}</h3>
                    <button className='btn' onClick={() => addHandle()}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductPage