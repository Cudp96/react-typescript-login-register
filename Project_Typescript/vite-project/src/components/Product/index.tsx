import { useEffect, useState } from "react"
import { getProduct } from "../../Services/axios.service"
import ProductLister from '../ProductLister';
import Navbar from "../navbar";
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
   

    return (
        <>
            <Navbar/>  
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