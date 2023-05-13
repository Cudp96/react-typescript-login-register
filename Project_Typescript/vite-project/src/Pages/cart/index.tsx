import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../components/Product/productSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const items = useSelector((state: any) => state.product)

  const products = useSelector((state: any) => state.product)


  const handleRemove = (productId: any) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Cart</h1>
        <div className="navlinks " >
          <Link to='/dashboard'  className="navLink">Home</Link>
          <Link to='/cart'  className="navLink">Cart</Link>
        </div>
        <span className="cartCount">Cart Items :{items.length}</span>
      </div>

      <div>
        <div className="cartWrapper">
          {products.map((product: any) => (
            <div key={product.id} className="cartCard">
              <img src={product.images} alt="" />
              <h5>{product.title}</h5>
              <h5>$ {product.price}</h5>
              <button
                className="btn"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cart