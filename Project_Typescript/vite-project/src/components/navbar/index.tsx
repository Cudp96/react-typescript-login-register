import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Navbar = () => {
    const items = useSelector((state:any)=>state.product)

  return (
    <div className="navbar">
    <h1>Products</h1>
    <div className="navLink">
        <Link to='/dashboard'  className="navLink">Home</Link>
        <Link to ='/cart'  className="navLink">Cart</Link>
    </div>
    <span className="cartCount">Cart Items :{items.length}</span>
</div>
  )
}

export default Navbar