# 🌿 Verdant Vibes

Verdant Vibes is a beginner-friendly e-commerce website built with **React** and **Redux**, simulating an online houseplant store. This project fulfills a 50-point rubric across 19 tasks covering GitHub setup, routing, Redux state management, UI design, and dynamic cart functionality.

---

## 📌 GitHub (6 Points)

- **✅ GitHub repository public URL (2 Points)**  
  📎 [GitHub Repository Link](https://github.com/your-username/verdant-vibes)

- **✅ Redux-related files and code (4 Points)**  
  Implemented `redux/store.js`, `cartActions.js`, `cartReducer.js`, and integrated with `Provider` in `index.js`.

---

## 🏡 Landing Page (5 Points)

- ✅ **Background image** (1 Point)  
- ✅ **Company name**: *Verdant Vibes* (1 Point)  
- ✅ **Paragraph about the company**: Describes our passion for indoor greenery (1 Point)  
- ✅ **"Get Started" button** that links to the product listing page using React Router (2 Points)  

---

## 🛍️ Product Listing Page (9 Points)

- ✅ **Six unique houseplants displayed** with thumbnail, name, and price (2 Points)  
- ✅ **Three categories**: e.g., "Succulents", "Tropical", "Foliage" (1 Point)  
- ✅ **Add to Cart button behavior** (6 Points):
  - Cart icon value increases ✅  
  - Button disables after click ✅  
  - Plant is added to shopping cart state ✅  

---

## 🧭 Header (7 Points)

- ✅ **Visible on both product and cart pages** (2 Points)  
- ✅ **Shopping cart icon** updates dynamically with cart count (3 Points)  
- ✅ **Navigation links** between product and cart pages (2 Points)  

---

## 🛒 Shopping Cart Page (23 Points)

- ✅ **Total number of plants** in the cart is displayed (2 Points)  
- ✅ **Total cost** of all items is calculated and shown (2 Points)  
- ✅ Each plant displays:
  - Thumbnail ✅
  - Name ✅
  - Unit price ✅ (6 Points)  
- ✅ **Increase button** adds quantity and updates total (4 Points)  
- ✅ **Decrease button** reduces quantity and updates total (4 Points)  
- ✅ **Delete button** removes plant type from cart (2 Points)  
- ✅ **Checkout button** shows “Coming Soon” message (1 Point)  
- ✅ **Continue Shopping** button links to product page (2 Points)  

---

## 🛠️ Technologies Used

- React
- Redux (with `redux-toolkit` optional)
- React Router DOM
- CSS (plain)

---

## 🧠 State Management

Redux handles global cart state with the following structure:
```js
{
  cart: {
    items: {
      [plantId]: {
        name,
        price,
        quantity,
        image
      }
    },
    totalItems,
    totalPrice
  }
}
