# Alternativelife MERN App

This repository contains a basic MERN stack skeleton for the Alternativelife website. The application features registration and login with JWT authentication and a protected dashboard that contains a placeholder astrology tool, saved reports and a profile page.

## Structure

- `server/` – Express.js backend with MongoDB models and routes
- `client/` – React frontend bootstrapped with Vite

## Environment variables

Create a `.env` file inside `server/` based on `.env.example`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/alternativelife
JWT_SECRET=supersecret
```

## Running locally

Install dependencies for both `server` and `client` and start them separately. The server runs on `localhost:5000` and the client on `localhost:5173` by default.
