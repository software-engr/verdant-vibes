import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
incrementQuantity,
decrementQuantity,
deleteItem,
clearCart,
} from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import "./ShoppingCartPage.css";

function ShoppingCartPage() {
const cartItems = useSelector((state) => state.cart.items);
const dispatch = useDispatch();
const navigate = useNavigate();

const plants = Object.values(cartItems);

const totalItems = plants.reduce((sum, item) => sum + item.quantity, 0);
const totalPrice = plants.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return (
<div className="shopping-cart">
<h1>Your Cart</h1>
{plants.length === 0 ? (
<p>Your cart is empty.</p>
) : (
<>
<table>
<thead>
<tr>
<th>Thumbnail</th>
<th>Name</th>
<th>Unit Price</th>
<th>Quantity</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{plants.map((plant) => (
<tr key={plant.id}>
<td>
<img src={plant.thumbnail} alt={plant.name} />
</td>
<td>{plant.name}</td>
<td>${plant.price}</td>
<td>{plant.quantity}</td>
<td>
<button
onClick={() => dispatch(incrementQuantity(plant.id))}
>
+
</button>
<button
onClick={() => dispatch(decrementQuantity(plant.id))}
disabled={plant.quantity <= 1}
>
-
</button>
<button onClick={() => dispatch(deleteItem(plant.id))}>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>

<div className="summary">  
        <p>Total Items: {totalItems}</p>  
        <p>Total Cost: ${totalPrice.toFixed(2)}</p>  
      </div>  

      <div className="cart-buttons">  
        <button onClick={() => alert("Checkout Coming Soon!")}>  
          Checkout  
        </button>  
        <button onClick={() => navigate("/products")}>  
          Continue Shopping  
        </button>  
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>  
      </div>  
    </>  
  )}  
</div>

);
}

export default ShoppingCartPage;
  
