# Swasthya Sync - Digital Healthcare Management for Educational Institutions

## Project Setup (Local Development)

This guide provides step-by-step instructions for setting up the project locally. The project consists of separate frontend and backend servers.

## Prerequisites
Make sure you have the following installed:
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

## Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm i
   ```
3. Create a `.env` file in the `frontend` directory and add the following:
   ```env
   VITE_API_URL=<YOUR_BACKEND_URL>
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm i
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=<YOUR_PORT>
   MONGO_URI=<YOUR_MONGO_URI>
   JWT_SECRET=<YOUR_JWT_SECRET>
   
   # Cloudinary
   API_KEY=<YOUR_CLOUDINARY_API_KEY>
   API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
   CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
   
   # Gemini API
   GEMINI_API=<YOUR_GEMINI_API_KEY>
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

## Running the Project
Ensure both the frontend and backend servers are running simultaneously. The frontend will communicate with the backend via the API URL specified in `.env`.

You're now set up to develop and test the project locally!

