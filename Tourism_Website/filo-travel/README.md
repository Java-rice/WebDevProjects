# Filo Travel Website

Welcome to the Filo Travel Website! Become part of our mission to explore and celebrate the wonders of the Philippines. Whether you're a seasoned traveler or a curious local, there's a place for you in our community.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction

Filo Travel is a platform designed to help you discover the beauty of the Philippines. Our website provides detailed travel guides, stunning visuals, and a vibrant community of travelers and locals who share their experiences and tips.

## Features

- Explore top 10 travel destinations across the Philippines.
- Responsive design for a great user experience.

## Installation

### Node.js and npm

Before installing the Filo Travel Website, ensure you have Node.js and npm installed on your system. Follow these steps to install Node.js and npm:

1. **Download Node.js:**
   - Visit [nodejs.org](https://nodejs.org/) and download the latest version of Node.js for your operating system.

2. **Install Node.js:**
   - Follow the installation instructions provided by the Node.js website to install Node.js on your system.

3. **Verify Installation:**
   - Open a terminal or command prompt.
   - Run the following commands to verify that Node.js and npm are installed:
     ```sh
     node -v
     npm -v
     ```
   - If you see version numbers printed for both commands, Node.js and npm are successfully installed.

### React and Dependencies

To set up the Filo Travel Website locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Java-rice/filo-travel.git
    cd filo-travel
    ```

2. **Install dependencies:**
   - First, navigate to the project directory (`filo-travel`).
   - Run the following command to install React and other necessary packages:
     ```sh
     npm install react
     npm install react-dom
     ```
   - If you're starting a new React project from scratch, you can use `create-react-app` to scaffold the project and automatically install React. Run the following command:
     ```sh
     npx create-react-app filo-travel
     cd filo-travel
     ```
   - This will create a new React project in the `filo-travel` directory and automatically install React and its dependencies.

To set up the Filo Travel Website locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Java-rice/filo-travel.git
    cd filo-travel
    ```

2. **Install dependencies:**
    - First, ensure you have Node.js and npm installed. Then, install React and other necessary packages:
        ```sh
        npx create-react-app filo-travel
        cd filo-travel
        npm install react-player
        npm install react-transition-group
        npm install react-router-dom
        npm install react-slick slick-carousel
        npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
        ```

3. **Import Font Awesome and Google Fonts:**
   - Add the following lines to the `<head>` section of your `public/index.html` file:
     ```html
     <!-- Font Awesome -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

     <!-- Google Fonts -->
     <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
     ```

## Usage

To start the development server, run:
```sh
npm run dev

This will start the React app, and you can view it in your browser at http://localhost:3000.

Technologies Used
HTML: For the structure of the website.
CSS: For styling and layout.
JavaScript: For functionality and interactivity.
React: For building the user interface.
React Player: For embedding and controlling video players.
React Transition Group: For animations and transitions.
React Router DOM: For routing and navigation.
React Slick & Slick Carousel: For creating responsive carousels.
Font Awesome: For scalable vector icons.
Google Fonts: For beautiful typography.


Contributing
We welcome contributions from the community. To contribute, please fork the repository and create a pull request with your changes. Ensure your code adheres to our coding standards and includes proper documentation.

Thank you for being part of the Filo Travel community! Happy travels!
