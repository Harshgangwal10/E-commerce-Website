**ShopEasy - Mini E-commerce Website**

**Getting Started**

 Installation
Clone the repository and install dependencies:

git clone <repo-url>

- cd frontend
- npm install

Run the Development Server

- npm run dev


**Tech Stack**

- Frontend: React (Vite)

- State Management: Redux Toolkit

- Routing: React Router DOM

- API Source: Fake Store API

- Styling: Custom CSS

- Data Caching: Redux store and localStorage

**Functional Features** 

🏠 1. Product Listing (/)

Displays all products in a responsive grid (image, title, price).
Search bar to filter by product title. Category dropdown to filter by category. Loading indicators and error handling included.
<img width="1917" height="1028" alt="Screenshot 2025-10-28 220447" src="https://github.com/user-attachments/assets/484a2383-6869-4999-8491-1e4dc7d0ee8a" />


📦 2. Product Detail (/product/:id)

Shows product image, title, description, category, price, and rating. Allows selecting quantity (1–5).
“Add to Cart” button adds item to cart using Redux.
<img width="1915" height="970" alt="Screenshot 2025-10-28 220559" src="https://github.com/user-attachments/assets/6ffccb24-32c4-4923-ac89-0256079820d4" />



🛒 3. Shopping Cart (/cart)

Lists added items with thumbnail, title, unit price, quantity selector, and subtotal. Allows item removal and quantity updates. Displays total price and “Proceed to Checkout” button.
<img width="1910" height="1028" alt="Screenshot 2025-10-28 220539" src="https://github.com/user-attachments/assets/99b15e23-4201-4069-a24a-e15ba8d4abaf" />


💳 4. Checkout (/checkout)

Displays order summary (items + total). Simple checkout form: name, email, address (with validation).“Place Order” clears the cart and shows confirmation.
<img width="1919" height="972" alt="Screenshot 2025-10-28 220545" src="https://github.com/user-attachments/assets/ec0cdcc2-3bf2-4f21-afea-d60b1c0500c0" />



✅ 5. Order Confirmation
After checkout, the order confirmation page is displayed.
<img width="1919" height="974" alt="Screenshot 2025-10-28 220552" src="https://github.com/user-attachments/assets/b8a5eb0e-25e3-4574-8933-e1dd201e399b" />


**State Management**

Implemented using Redux Toolkit.



