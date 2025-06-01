import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import "./ProductListingPage.css";

const plants = [
{
id: "p1",
name: "Monstera Deliciosa",
price: 25,
thumbnail:
"https://images.unsplash.com/photo-1601985689797-28a9e25e3a03?auto=format&fit=crop&w=400&q=60",
category: "Tropical",
},
{
id: "p2",
name: "Snake Plant",
price: 18,
thumbnail:
"https://images.unsplash.com/photo-1594750940945-8ca379abb33e?auto=format&fit=crop&w=400&q=60",
category: "Succulents",
},
{
id: "p3",
name: "Fiddle Leaf Fig",
price: 30,
thumbnail:
"https://images.unsplash.com/photo-1588303543149-e799f9e06296?auto=format&fit=crop&w=400&q=60",
category: "Foliage",
},
{
id: "p4",
name: "Aloe Vera",
price: 15,
thumbnail:
"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
category: "Succulents",
},
{
id: "p5",
name: "ZZ Plant",
price: 20,
thumbnail:
"https://images.unsplash.com/photo-1573151881844-3c70a3a3dfbd?auto=format&fit=crop&w=400&q=60",
category: "Foliage",
},
{
id: "p6",
name: "Bird of Paradise",
price: 35,
thumbnail:
"https://images.unsplash.com/photo-1501004318643-4893c5f9e8b3?auto=format&fit=crop&w=400&q=60",
category: "Tropical",
},
];

function ProductListingPage() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

// Group plants by category
const categories = [...new Set(plants.map((p) => p.category))];

const handleAddToCart = (plant) => {
dispatch(addToCart(plant));
};

return (
<div className="product-listing">
{categories.map((cat) => (
<div key={cat}>
<h2>{cat}</h2>
<div className="plants-grid">
{plants
.filter((p) => p.category === cat)
.map((plant) => (
<div key={plant.id} className="plant-card">
<img src={plant.thumbnail} alt={plant.name} />
<h3>{plant.name}</h3>
<p>${plant.price}</p>
<button
onClick={() => handleAddToCart(plant)}
disabled={!!cartItems[plant.id]}
>
{cartItems[plant.id] ? "Added" : "Add to Cart"}
</button>
</div>
))}
</div>
</div>
))}
</div>
);
}

export default ProductListingPage;

                              
