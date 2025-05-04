# NMS Mini E-commerce Store Backend - NMS.Dev 2025

A simple RESTful backend built with Node.js, Express, and MongoDB, providing authentication, product management, cart, checkout (demo), and protected admin routes.

## Features

- User & Admin Authentication (JWT-based)
- Product CRUD (admin only)
- Product Search by Name
- Cart Functionality
- Demo Checkout
- Admin Route Protection

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcrypt.js (for password hashing)
- dotenv + cors

## Folder Structure

```
ecommerce-backend/
│
├── controllers/        # Logic for auth, products, cart, etc.
├── middlewares/        # Auth & role checking
├── models/             # Mongoose models
├── routes/             # API route handlers
├── .env                # Environment config (JWT secret, DB URI)
├── server.js           # Entry point
└── package.json
```

## Installation & Run

```bash
# Clone the repo
git clone https://github.com/nilupul-madhusanka/nms-mini-store-backend.git
cd nms-mini-store-backend

# Install dependencies
npm install

# Start the server
npm start
```

## API Endpoints Summary

### Authentication

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register user/admin |
| POST | /api/auth/login | Login and get token |

### Products

| Method | Route | Description | Access |
|--------|-------|-------------|--------|
| GET | /api/products | Get all products | Public |
| POST | /api/products | Create product | Admin |
| PUT | /api/products/:id | Update product | Admin |
| DELETE | /api/products/:id | Delete product | Admin |
| GET | /api/products/search?name=... | Search product by name | Public |

### Cart

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/cart/add | Add item to cart |
| GET | /api/cart | Get cart items |
| PUT | /api/cart | Update quantity |
| DELETE | /api/cart/:id | Remove item from cart |

### Checkout (Demo)

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/checkout | Simulate checkout |

## Testing with Postman

1. Register/login to get a token.
2. Use the token in the Authorization header for protected routes:
   ```
   Authorization: Bearer <your_token_here>
   ```

## Admin Notes

- Register with `"role": "admin"` in the body to access admin-only routes.
- Admin has full access to product management routes.

## Future Improvements

- Real payment integration (Stripe, PayPal)
- Order tracking
- Pagination for product listing
- Email confirmation

## Author

Nilupul Madhusanka - NMS.Dev 2025
