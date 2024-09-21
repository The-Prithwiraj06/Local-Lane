# The Local Lane

Welcome to the Handcrafts Marketplace web application repository! This project is designed to provide a platform where users can easily discover and purchase local handcrafts and handmade products. The application allows users to sign up as either a regular User or as a Vendor, enabling Vendors to upload their product listings, including images, prices, names, and descriptions. This README file will guide you through the setup and usage of the application.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User and Vendor Roles**: Users can sign up as regular users or vendors.
- **Product Listings**: Vendors can upload product listings with images, prices, names, and descriptions.
- **Browse and Purchase**: Users can log in, browse products, and make purchases.
- **React Frontend**: The frontend of the application is built using React.
- **Node.js Backend**: The backend is powered by Node.js and TypeScript.
- **Database**: The application uses a database to store user information and product listings.
- **Authentication**: Secure user authentication is implemented for both roles.
- **Payment Processing**: Integration with payment gateways for handling transactions.

## Prerequisites

Before you can run the application, ensure you have the following prerequisites installed:

- Node.js (v14+)
- npm or yarn
- MongoDB (or any other preferred database)
- Payment gateway account (e.g., Stripe, PayPal, etc.)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/handcrafts-marketplace.git
   cd handcrafts-marketplace
   ```

2. Install the dependencies for both the frontend and backend:

   ```bash
   # Navigate to the frontend directory
   cd frontend
   npm install

   # Navigate to the backend directory
   cd ../backend
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   PORT=3000
   DATABASE_URL=your_database_url_here
   JWT_SECRET=your_jwt_secret_here
   PAYMENT_GATEWAY_SECRET=your_payment_gateway_secret_here
   ```

   Make sure to replace `your_database_url_here`, `your_jwt_secret_here`, and `your_payment_gateway_secret_here` with your actual database URL, JWT secret, and payment gateway secret.

4. Initialize the database:

   Run the necessary scripts to create and seed the database with initial data.

   ```bash
   # Navigate to the backend directory
   cd backend

   # Run database migrations
   npm run migrate

   # Seed the database with initial data (optional)
   npm run seed
   ```

5. Start the application:

   ```bash
   # Start the frontend
   cd ../frontend
   npm start

   # Start the backend
   cd ../backend
   npm start
   ```

6. The application should now be running locally. Access it in your web browser at `http://localhost:3000`.

## Usage

1. **User Registration and Login**: Users can sign up for an account or log in if they already have one. Vendors can also register and log in.

2. **Vendor Product Upload**: Vendors can upload product listings, including images, prices, names, and descriptions.

3. **Browse and Purchase**: Users can browse the available products, view details, and make purchases.

4. **Checkout and Payment**: Users can add products to their cart and proceed to checkout. Payment integration with your selected payment gateway will handle transactions.

5. **Order History**: Users can view their order history and order details.

## API Documentation

Detailed API documentation can be found in the `docs` directory of the backend code. You can access it by navigating to `backend/docs/index.html` after starting the backend server.

## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out our Handcrafts Marketplace web application repository. We hope you find this application useful and enjoy using it! If you have any questions or encounter any issues, please don't hesitate to [open an issue](https://github.com/your-username/handcrafts-marketplace/issues) or reach out to us.

Happy crafting and shopping! 🛍️🎨
