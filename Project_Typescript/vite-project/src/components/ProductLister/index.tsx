import { add } from '../Product/productSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const ProductLister: any = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandle = (e:any,product:any) => {
    e.preventDefault();
    dispatch(add(product));
  }
  const viewProduct = ()=>{
      navigate(`/dashboard/${product.id}`);
      
  }

  return (
    <>
      {/* <Link to={`/dashboard/${product.id}`}> */}
      <div className="card" key={product.id}>
        <img src={product.images} alt="" />
        <h4>{product.title}</h4>
        {/* <h6>{product.description}</h6> */}
        <h5> $ {product.price}</h5>
        <button className="btn" onClick={(e) => addHandle(e,product)}>
          Add to cart
        </button>
        <button className="btn mt-2" onClick={(e) => viewProduct(product.id)}>
            View Product
        </button>
      </div>
      {/* </Link> */}
    </>
  )
}

export default ProductLister;