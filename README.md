# Furniro

Furniro is an e-commerce website designed to sell furniture across various categories such as dining, living, and bedroom. The website also features informative blogs about furniture. Each furniture item has a dedicated product page, providing detailed information to customers.

Figma Link: https://www.figma.com/design/IQyL5CfOCvWD0W0mGmtRa3/E---Commerce?node-id=1-22150&t=AhAcqJgoMcHdxtA6-0

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse furniture by different categories: dining, living, bedroom
- Informative blogs about furniture
- Detailed product pages for each furniture item
- Add to cart feature
- Paging for seamless navigation

## Technologies Used

Furniro is built using the MERN stack:

- **Frontend**: React
- **State Management**: Redux Toolkit
- **Backend**: MongoDB
- **Paging**
- **Add to Cart Feature**

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/furniro.git
   cd furniro
   ```
2. Install NPM packages for the frontend:

    ```sh
        cd client
        npm install
    ```
3. Install NPM packages for the backend:

    ```sh
        cd ../server
        npm install
    ```
4. Start MongoDB:
    
    Ensure your MongoDB server is running.

5. Start the development server:

    - Navigate to the client directory and start the React development server:
    ```sh
    cd client
    npm start
    ```

    - In a separate terminal, start the backend server:
    ```sh
    cd server
    npm start
    ```

##  Usage:

    Once the servers are running, open your browser and navigate to `http://localhost:3000` to start using Furniro.

## Project Structure

- `client/`: Contains the React frontend application.
  - `src/`: React components, Redux store, and other frontend code.
- `server/`: Contains the Express backend application.
  - `models/`: MongoDB models.
  - `routes/`: Express routes for the API.
  - `controllers/`: Controllers for handling the logic of routes.
- `README.md`: Project documentation.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for visiting Furniro! Happy browsing!
