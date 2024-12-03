# Getting Started

This guide will help you set up and run the project for both development and production environments.

---

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

---

## 1. Install Dependencies and Configure Environment Variables

1. **Environment Variables:**

   - Create a `.env` file in the root directory.
   - Add all required environment variables to the `.env` file based on the project's configuration.

2. **Install Dependencies:**

   - Run the following command to install the project dependencies:

     `npm install --legacy-peer-deps`

     **Note:** The `--legacy-peer-deps` flag is used to bypass dependency conflicts, as some packages might not yet support React Latest Version (React V19).

---

## 2. Running the Development Server

To run the project in development mode with hot-reloading enabled, use one of the following commands based on your package manager:

`npm run dev`

# or

`yarn dev`

# or

`pnpm dev`

# or

`bun dev`

### 3. Running the Production Server

# Build for production

`npm run build`

# Run the production server

`npm start`

# or

`yarn start`

# or

`pnpm start`

# or

`bun start`
