RentalCar - Car Rental Web Application

📌 Project Overview

RentalCar is a frontend web application for a car rental company. It allows users to browse available cars, filter listings based on specific criteria, view detailed information about each car, and book a car for rental. The application is built using React with Vite and utilizes Redux for state management.

🚀 Features

Home Page: Includes a banner with a call to action.

Car Catalog:

- Displays all available cars.
- Filters vehicles by brand, price, and mileage (filtering is done via API backend).
- Adds cars to the favorites list, which persists after page reload.
- Supports infinite scroll using a "Load More" button (backend pagination).

Car Details Page:

- Displays a detailed view of the selected car with an image and specifications.
- Provides a booking form to rent the car.
- Shows a success notification upon successful booking.

Navigation & Routing:

- / - Home Page
- /catalog - Car Catalog Page
- /catalog/:id - Individual Car Details Page

User Experience Enhancements:

- The displayed mileage format includes a space (e.g., "5 000 km" instead of "5000 km").
- The design follows the provided UI mockups.
- Desktop-first design with optional responsiveness.

🛠 Tech Stack

- React with Vite
- Redux for state management
- React Router for client-side routing
- Axios for API requests
- CSS Library: Any preferred (e.g., CSS Modules, Styled Components, MUI, etc.)

📡 API Integration

- The app interacts with the backend API documented at: Car Rental API Docs.
- 🏗 Installation & Setup

Clone the repository:
- git clone https://github.com/yourusername/rentalcar.git
cd rentalcar

Install dependencies:
- npm install

Start the development server:
- npm run dev

Deploy the project (optional, e.g., using Vercel or Netlify):
- npm run build

🔧 Project Structure
/src
├── components/  # Reusable UI components
├── pages/       # Page components (Home, Catalog, Car Details)
├── redux/       # Redux store, slices, and actions
├── api/         # API service functions
├── styles/      # Global and component-specific styles
├── App.js       # Main application component
├── main.js      # Entry point
└── router.js    # Routes configuration
