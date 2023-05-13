import { useEffect, useState } from "react"
import { getProduct } from "../../Services/axios.service"
import ProductLister from '../ProductLister';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import productSlice from '../Product/productSlice';

const Product: any = () => {

    const [newProducts, setNewProducts] = useState([]);

    const products = async () => {
        const response: any = await getProduct();
        setNewProducts(response);

    }
    useEffect(() => {
        products();
    })
    const items = useSelector((state:any)=>state.product)

    return (
        <>
            <div className="navbar">
                <h1>Products</h1>
                <div className="navLink">
                    <Link to='/dashboard'  className="navLink">Home</Link>
                    <Link to ='/cart'  className="navLink">Cart</Link>
                </div>
                <span className="cartCount">Cart Items :{items.length}</span>
            </div>
            
            <div className="productWrapper">
                {
                    newProducts.map((product: any) => {
                        return <ProductLister product={product} key={product.id} />
                    })
                }
            </div>
        </>
    )
}

export default Product;