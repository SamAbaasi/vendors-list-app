# Vendors List App

This project is a web application that displays a list of vendors using React and Redux. The application allows users to view a list of vendors and load more vendors when scrolling to the bottom of the page. The vendor data is fetched from an API using Redux Thunk.

## Demo

**Live Demo**: [View Live Demo](https://vendors-list.netlify.app/)

## Getting Started

To begin using this Vendors List application, follow these simple steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/SamanAbasi/vendors-list-app
    cd vendors-list-app


2. Install the dependencies:

   ```bash
    npm install


3. Start the development server:

   ```bash
    npm start


## Technologies Used

This Vendors List application leverages various technologies and libraries to deliver a powerful and responsive user experience. Here's a list of the key technologies used:

- React.js: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- Redux Toolkit: A package that simplifies Redux setup and usage.
- Axios: A library for making HTTP requests.
- TypeScript: A typed superset of JavaScript that enhances code quality and maintainability.
- React Loading Skeleton: A library for displaying skeleton loading UI.
- Create React App: A boilerplate for setting up a React application.

## Features
This Vendors List application comes packed with features that make it a powerful tool for managing and visualizing data. Here's a glimpse of some of the key features:

- Display a list of vendors with their details (name, description, rating, etc.).
- Load more vendors when scrolling to the bottom of the page.
- Show skeleton loading UI while fetching vendors.
- Handle empty vendor lists and loading states.
Each of these features is meticulously implemented to enhance the overall functionality and user experience of the Vendors List application.

## Folder Structure

The project structure is organized as follows:
vendors-list-app/
 ```
├── src/
│ ├── api/ # Contains API functions
│ ├── components/ # Reusable components
│ ├── lib/ # Utility functions and constants
│ ├── store/ # store setup and modules
│ ├── types/ # TypeScript type declarations
│ ├── App.tsx # Main application component
│ ├── index.tsx # Entry point
│ └── ... # Other files and folders
├── public/: # Includes public assets and static files.
├── package.json and package-lock.json: Define project dependencies and versions.
└── README.md # You're currently reading it! This README provides detailed information about the project's structure, features, and usage.
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.
