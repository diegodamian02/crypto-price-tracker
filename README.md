Crypto Price Tracker

📌 Overview

Crypto Price Tracker is a web application that provides real-time cryptocurrency prices using the CoinGecko API. The project is built with Next.js for the frontend and leverages React Query for data fetching and state management.

🚀 Features

📈 Real-time cryptocurrency price updates

🔍 Search functionality for filtering coins

🔄 Manual refresh button to update prices

🎨 Smooth gradient background with a fading effect

📊 Price display in an organized UI

🛠️ Tech Stack

Frontend: Next.js, React, CSS Modules

Data Fetching: Axios, React Query

API: CoinGecko

📂 Project Structure

crypto-price-tracker/
├── components/          # Reusable UI components
│   ├── CryptoDashboard.js  # Main dashboard for price tracking
│   ├── SearchBar.js       # Search input for filtering coins
│   ├── RefreshButton.js   # Button to refresh prices
│
├── styles/              # CSS Modules for styling
│   ├── CryptoDashboard.module.css  # Dashboard styling
│
├── pages/               # Next.js pages
│   ├── _app.js          # Global settings
│   ├── index.js         # Homepage with Crypto Dashboard
│
├── public/              # Static assets
│
├── docs/                # Project documentation
│   ├── setup.md         # Setup instructions
│   ├── api.md           # API usage guide
│   ├── state-management.md  # React Query implementation
│   ├── challenges.md    # Development challenges & improvements
│
├── package.json         # Dependencies & scripts
├── README.md            # Project documentation

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker

Install dependencies:

npm install

Run the development server:

npm run dev

The app will be available at http://localhost:3000.

🔌 API Integration

The app fetches cryptocurrency prices from the CoinGecko API.

API Endpoint:

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,polkadot&vs_currencies=usd

🎨 Styling

Gradient Background: The background features a smooth fade from blue to light blue.

CSS Modules: Used for component-level styling to prevent conflicts.

🚀 Future Enhancements

📊 Interactive chart for price trends

💰 Portfolio tracking feature

📉 Price alerts for specific thresholds

📜 License

🦖 I wasn't able to figure out how to use Docusaurus but hopefully one day I'll learn. The gitignore was not able to ignore the
node_modules packages, files were too heavy causing a rejection to push to my repository 

Made with ❤️ by Diego Damian 🚀

