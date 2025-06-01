import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
const cartItems = useSelector((state) => state.cart.items);
const totalQuantity = Object.values(cartItems).reduce(
(sum, item) => sum + item.quantity,
0
);

return (
<header className="header">
<div className="logo">
<Link to="/">Verdant Vibes</Link>
</div>
<nav>
<Link to="/products">Products</Link>
<Link to="/cart" className="cart-link">
🛒 Cart ({totalQuantity})
</Link>
</nav>
</header>
);
}

export default Header;
