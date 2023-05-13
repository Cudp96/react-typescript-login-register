import { add } from '../Product/productSlice'
import { useDispatch } from 'react-redux'


const ProductLister: any = ({ product }) => {
  const dispatch = useDispatch();

  const addHandle = (product:any) => {
    dispatch(add(product));
  }

  return (
    <>
      <div className="card" key={product.id}>
        <img src={product.images} alt="" />
        <h4>{product.title}</h4>
        {/* <h6>{product.description}</h6> */}
        <h5> $ {product.price}</h5>
        <button className="btn" onClick={() => addHandle(product)}>
          Add to cart
        </button>
      </div>
    </>
  )
}

export default ProductLister;