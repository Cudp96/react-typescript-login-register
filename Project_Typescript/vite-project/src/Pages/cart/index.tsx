import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../components/Product/productSlice";
import Navbar from "../../components/navbar";

const Cart = () => {

  const dispatch = useDispatch();

  const products = useSelector((state: any) => state.product)


  const handleRemove = (productId: any) => {
    dispatch(remove(productId));
  };

  return (
    <>
    <Navbar/>
      <div>
        <div className="cartWrapper">
          <h3>Cart</h3>
          {products.map((product: any) => (
            <div key={product.id} className="cartCard">
              <img src={product.images} alt="" />
              <h5>{product.title}</h5>
              <h5> {product.category.name}</h5>
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

export default Cart;