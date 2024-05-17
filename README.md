Welcome to our project INNOV8TIVE.

Teststack:
1 React

# INNOV8IVE

INNOV8IVE is a unique e-commerce platform that connects students in nearby communities, allowing them to easily share and rent tech gadgets. The platform fosters collaboration and promotes sustainable technology consumption.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

INNOV8IVE addresses the following problems:
- Lack of Community Exchange
- Affordable Access to Tech Gadgets

Our solution:
- An online platform for listing and renting tech gadgets.
- Promotes collaboration and sustainable tech consumption among students.

## Features

- **User-Friendly Interface**: Easy-to-navigate website for students.
- **Secured Environment**: Secure transactions and data protection.
- **Collaboration & Connections**: Connects students within nearby communities.
- **Rating & Review System**: Helps ensure trust and reliability.
- **Product Search Bar**: Quickly find tech gadgets.
- **Shop Now Button**: Direct access to browse available products.

## Architecture

### Frontend
- **React**: User interface built with React for a responsive and dynamic experience.

### Backend
- **Spring Boot**: Manages business logic and API endpoints.

### Database
- **MySQL**: Stores application data including user profiles, product listings, and transactions.

### Authentication
- **Auth0**: Handles user authentication and authorization.


## Tech Stack

- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MySQL
- **Authentication**: Auth0

## Installation

### Prerequisites

- Java (JDK 17)
- MySQL

### Steps

1. **Clone the Repository**:
  
   git clone https://github.com/nithincod/INNOV/
   cd INNOV

2. **Setup the Frontend**:
  
   cd frontend
   npm install
   npm start
   ```

3. **Setup the Backend**:
  
   cd backend
   ./mvnw spring-boot:run
   ```

4. **Setup the Database**:
   - Ensure MySQL is running.
   - Create a new database and configure the connection settings in `application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/innov8ive
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     ```

5. **Configure Auth0**:
   - Sign up for an Auth0 account.
   - Configure your Auth0 domain, client ID, and client secret in the backend.

## Usage

1. **Register/Login**:
   - Use the Auth0 login page to register or log in.

2. **Browse Products**:
   - Use the "Shop Now" button or the search bar to browse available tech gadgets.

3. **List a Product**:
   - Navigate to the "List a Product" page to add a new gadget for rent.

4. **Rent a Product**:
   - Select a product and specify the rental duration.

5. **Review and Rate**:
   - After using a product, leave a review and rate the experience.






