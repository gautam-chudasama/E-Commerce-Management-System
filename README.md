# E-Commerce Management System

A full-stack e-commerce application built with React, Redux Toolkit, and JSON Server. This application provides a complete online shopping experience with user authentication, product management, and shopping cart functionality.

## Features

### User Features
- **User Authentication**: Login and registration system
- **Product Browsing**: View products with infinite scroll
- **Shopping Cart**: Add, remove, and modify product quantities
- **User Profile**: Update personal information
- **Product Details**: Detailed product information pages

### Admin Features
- **Product Management**: Create, update, and delete products
- **Admin Dashboard**: Administrative controls for product management

## Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Navigation
- **React Hook Form** - Form handling
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Infinite Scroll** - Infinite scrolling functionality

### Backend
- **JSON Server** - Mock REST API
- **Node.js** - Runtime environment

## Project Structure

```
├── backend/
│   ├── db.json              # Database file with users and products
│   ├── package.json         # Backend dependencies
│   └── .gitignore          # Git ignore file
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Nav.jsx      # Navigation component
│   │   ├── pages/
│   │   │   ├── Cart.jsx     # Shopping cart page
│   │   │   ├── Login.jsx    # Login page
│   │   │   ├── Register.jsx # Registration page
│   │   │   ├── Products.jsx # Product listing page
│   │   │   ├── admin/
│   │   │   │   ├── CreateProduct.jsx
│   │   │   │   └── ProductDetail.jsx
│   │   │   └── user/
│   │   │       └── UserProfile.jsx
│   │   ├── routes/
│   │   │   ├── Mainroutes.jsx
│   │   │   └── Authwrapper.jsx
│   │   ├── store/
│   │   │   ├── Store.jsx
│   │   │   ├── actions/
│   │   │   └── reducers/
│   │   ├── api/
│   │   │   └── axiosconfig.jsx
│   │   └── App.jsx
│   ├── package.json
│   └── index.html
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-management-system
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

### Start the Backend Server
```bash
cd backend
npx json-server db.json --port 3000
```

### Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

## API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Products
- `GET /products` - Get all products
- `GET /products?_limit=6&_start=0` - Get products with pagination
- `POST /products` - Create a new product
- `PATCH /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## Default Admin Credentials

```
Email: admin@master.com
Password: 00
```

## Key Features Implementation

### Authentication
- JWT-like authentication using localStorage
- Protected routes with AuthWrapper component
- Role-based access control (Admin/User)

### State Management
- Redux Toolkit for global state management
- Separate slices for users, products, and cart
- Async actions for API calls

### Shopping Cart
- Add/remove items from cart
- Quantity management
- Persistent cart storage

### Product Management
- CRUD operations for products
- Image upload via URL
- Category-based organization

### Responsive Design
- Tailwind CSS for styling
- Modern UI components

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npx json-server db.json --port 3000` - Start JSON server

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Future Enhancements

- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Advanced search and filtering
- [ ] Product reviews and ratings
- [ ] Order history and tracking
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

---

**Note**: This is a development version using JSON Server as a mock backend. For production use, implement a proper backend with a real database and authentication system.
