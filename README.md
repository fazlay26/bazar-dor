# 🛒 BazarDor

> **Daily Market Prices of Bangladesh at a Glance**

BazarDor is a modern web application that presents daily commodity prices from various markets across Bangladesh in one place. Users can easily check today's prices of rice, lentils, oil, vegetables, fish, meat, eggs, milk, and spices, and compare them with last week's or last month's prices.

![BazarDor Banner](https://img.shields.io/badge/BazarDor-Market%20Prices-2e7d32?style=for-the-badge)

---

## 🛠️ Technologies Used

This project is built with modern web development technologies:

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety and improved developer experience |
| **Tailwind CSS** | Rapid and modern UI design |
| **DaisyUI** | Tailwind-based UI component library |
| **Better Auth** | Secure authentication system |
| **MongoDB** | NoSQL database |
| **MongoDB Adapter** | Database management for Better Auth |
| **React Hot Toast** | Beautiful notification system |
| **React Fast Marquee** | Scrolling price ticker |
| **Next.js Image** | Image optimization |

---

## ✨ Key Features

### 1. 📊 Today's Market Prices at a Glance
The home page displays today's prices of all commodities, separate sections for products whose prices have increased or decreased, and detailed information for each product. A scrolling marquee at the top shows the latest prices of all products.

### 2. 📈 Price Change Analysis
For each product, users can compare today's price with yesterday's, last week's, and last month's prices. Price changes are clearly shown in three categories: increased (▲ red), decreased (▼ green), and unchanged (● gray).

### 3. 🏪 Market-Wise Price Comparison
For every product, the minimum, maximum, and average prices across 12 markets in Bangladesh (Karwan Bazar, Green Market, Chouddagram Bazar, etc.) are displayed in a table. This allows users to easily identify which market offers lower or higher prices.

### 4. 🔐 Complete Authentication System
Users can sign up and sign in using Email/Password, Google, or GitHub via Better Auth. Protected routes ensure that certain pages are only accessible to logged-in users. Users can update their profile information (name).

### 5. 🔍 Category Filter and Sorting
Through the navbar, users can click on any of the 8 categories — Rice, Lentils, Oil, Vegetables, Fish, Meat, Egg-Milk, Spices — to view all products in that category. A sorting dropdown allows products to be sorted by price (low-high/high-low) or by name.

---

## 📁 Project Structure
