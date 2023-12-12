# Node.js Express MongoDB Starter

This is a simple Node.js, Express, and MongoDB starter template for building web applications with user authentication, seller and buyer functionality, and order management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set up MongoDB](#3-set-up-mongodb)
  - [4. Configure Environment Variables](#4-configure-environment-variables)
  - [5. Run the Project](#5-run-the-project)
- [Testing Endpoints](#testing-endpoints)
  - [Register User](#register-user)
  - [Login](#login)
  - [Create Catalog](#create-catalog)
  - [Place Order](#place-order)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/)

## Getting Started

### 1. Clone the Repository

````bash
git clone <repository-url>
cd <project-folder>

## 2. Install Dependencies

```bash
npm install
````

## 3. Set up MongoDB

- Ensure MongoDB is running on your machine.
- Create a new database for the project.

## 4. Configure Environment Variables

- Create a `.env` file in the project root.

  Add the following variables:

```env
MONGOURI=<your-mongodb-connection-string>


```

## 5. Run the Project

```bash
npm start

```
