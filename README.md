# Vendor List Challenge

This project is a web application that displays a list of vendors using React and Redux. The application allows users to view a list of vendors and load more vendors when scrolling to the bottom of the page. The vendor data is fetched from an API using Redux Thunk.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display a list of vendors with their details (name, description, rating, etc.).
- Load more vendors when scrolling to the bottom of the page.
- Show skeleton loading UI while fetching vendors.
- Handle empty vendor list and loading states.

## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/SamanAbasi/vendors-list-app
    cd vendor-list-challenge


2. Install the dependencies:

   ```bash
    npm install


3. Start the development server:

   ```bash
    npm start


4. Open your browser and navigate to `http://localhost:3000` to see the application.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm run build`: Builds the production version of the app.

## Folder Structure

The project structure is organized as follows:

vendor-list-challenge/

├── src/

│ ├── api/ # Contains API functions

│ ├── components/ # Reusable components

│ ├── lib/ # Utility functions and constants

│ ├── store/ # Redux store setup and slices

│ ├── types/ # TypeScript type declarations

│ ├── App.tsx # Main application component

│ ├── index.tsx # Entry point

│ └── ... # Other files and folders

├── public/

├── package.json

├── package-lock.json

└── README.md


## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- Redux Toolkit: A package that simplifies Redux setup and usage.
- Axios: A library for making HTTP requests.
- TypeScript: A typed superset of JavaScript that enhances code quality and maintainability.
- React Loading Skeleton: A library for displaying skeleton loading UI.
- Create React App: A boilerplate for setting up a React application.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.
