# InstaBoard

> A modern React application for discovering and connecting with amazing profiles from around the world.

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![React Router](https://img.shields.io/badge/React_Router-6.x-red?logo=react-router)

## 🌟 Overview

InstaBoard is a dynamic web application built with React that allows users to browse, search, and interact with user profiles fetched from the Random User API. The application features a beautiful, responsive design with dark mode support, profile management, and an intuitive user interface.

## ✨ Key Features

### Core Functionality

- 🔍 **Search Users** - Real-time search by name
- 👥 **Browse Profiles** - View detailed user information
- ❤️ **Save Favorites** - Like users and save to local storage
- 📧 **Quick Contact** - View and toggle email visibility
- 🔄 **Dynamic Loading** - Configurable results (1-100 users)
- 📱 **Responsive Design** - Works on all devices

### Advanced Features

- 🌙 **Dark/Light Mode** - Toggle between themes
- 🎨 **Modern UI** - Beautiful gradients and animations
- 🚀 **Fast Performance** - Optimized React components
- 💾 **Data Persistence** - localStorage integration
- 🔐 **Privacy Controls** - Email visibility toggle per user

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/instaboard.git

# Navigate to project directory
cd instaboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 🛠️ Built With

- **React** - UI library
- **React Router** - Navigation and routing
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and animations
- **Random User API** - User data source
- **Vite** - Build tool and dev server

## 📱 Pages

### Home (`/`)

Landing page with features overview and call-to-action buttons.

### About (`/about`)

Information about InstaBoard, features, and technology stack.

### Team (`/team`)

Main user browsing page with:

- Search functionality
- Configurable results per request
- Like/unlike users
- View detailed profiles

### Team Details (`/team/:id`)

Detailed user profile showing:

- Contact information
- Location details
- Personal information
- Like/unlike functionality

### Liked Users (`/liked-users`)

View all your liked users with ability to unlike them.

### 404 Not Found (`*`)

Friendly error page for invalid routes.

## 🎨 Features in Detail

### Search Functionality

- Real-time filtering by first name, last name, or full name
- Case-insensitive search
- Clear search button
- Result counter

### Like System

- Like/unlike users with one click
- Heart icon with animation
- Data stored in localStorage
- Synced across all pages

### Email Privacy

- Toggle email visibility per user
- Shows masked email by default (`••••••@••••.com`)
- Eye icon for show/hide control
- Smooth animations

### Dark Mode

- Toggle button in navigation bar
- Smooth theme transitions
- Consistent across all pages
- Persistent preference (session-based)

### Responsive Design

- Mobile-first approach
- Breakpoints: 360px, 480px, 640px, 768px, 1024px, 1200px
- Touch-friendly buttons
- Optimized layouts for all screen sizes

## 🔧 Configuration

### API Configuration

The app uses the Random User API. To modify the API endpoint or add parameters:

```javascript
// src/pages/Team/Team.jsx
const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
```

### localStorage Keys

```javascript
"likedUsersData"; // Stores array of liked user objects
```

## 🎯 Best Practices

- ✅ Component-based architecture
- ✅ React Hooks (useState, useEffect, useNavigate, useLocation)
- ✅ Proper error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ CSS animations and transitions
- ✅ Clean code structure
- ✅ Code reusability

## 🙏 Acknowledgments

- [Random User API](https://randomuser.me/) - User data provider
- [React Documentation](https://react.dev/) - React guides
- [React Router](https://reactrouter.com/) - Routing library
- Design inspiration from modern web applications
