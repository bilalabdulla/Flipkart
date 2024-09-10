

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-div'>
            <h4 className='logo-title'>Flipkart</h4>
            <h4 className='logo-text'>Explore <span>Plus</span></h4>
        </div>
        <div className='search-div'>
            <input className='search' placeholder='Search for products, brands and more'/>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        <div className='nav-btns'>
            <button className='login'><p>Login</p></button>
            <button className='seller'><p>Become a seller</p></button>
            <button className='more'><p>More </p><i className="fa-solid fa-chevron-down"></i></button>

            <button className='cart'><i className="fa-solid fa-cart-shopping cart-icon"></i><p>Cart</p></button>
        </div>
    </div>
  )
}

export default Navbar