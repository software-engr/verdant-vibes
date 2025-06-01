import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
const navigate = useNavigate();

return (
<div className="landing-page">
<h1>Verdant Vibes</h1>
<p>
Your one-stop shop for beautiful, healthy houseplants. We bring life and green vibes to your home.
</p>
<button onClick={() => navigate("/products")}>Get Started</button>
</div>
);
}

export default LandingPage;
