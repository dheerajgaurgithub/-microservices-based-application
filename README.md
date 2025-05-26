#  microservices-based application
it is an assignment project

This project is a microservices-based Book Store API implemented using Node.js and Express. Each service runs independently and is connected through an API Gateway. All endpoints are documented using Swagger (OpenAPI).

## Project Structure

- **book-service** — Handles books data (`/books` routes)
- **user-service** — Handles users data (`/users` routes)
- **order-service** — Handles orders data (`/orders` routes)
- **api-gateway** — Central API Gateway routing requests to above services

---

## Prerequisites

- Node.js installed (version 14+ recommended)
- npm (comes with Node.js)

---

## How to Run the Project

You need to run **each service** and the **API Gateway** in separate terminal windows.

### 1. Start Book Service

```terminal
Start Book Service

cd book-service
npm install
node index.js

Service will run on http://localhost:3001


Start User Service

cd user-service
npm install
node index.js
Service will run on http://localhost:3002

Start Order Service

cd order-service
npm install
node index.js
Service will run on http://localhost:3003

Start API Gateway


cd api-gateway
npm install
node index.js
Gateway runs on http://localhost:3000

| Resource | GET (List) | POST (Add) |
| -------- | ---------- | ---------- |
| Books    | `/books`   | `/books`   |
| Users    | `/users`   | `/users`   |
| Orders   | `/orders`  | `/orders`  |

use postman or other services to add data



