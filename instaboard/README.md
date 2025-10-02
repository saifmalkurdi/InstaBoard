# InstaBoard

InstaBoard is a React application that displays beautifully animated user profiles fetched from the [RandomUser API](https://randomuser.me/). Users can like profiles, toggle email visibility, search profiles by name, and load more profiles dynamically. The app also supports a light/dark theme toggle.

---

## Features

- **Random user profiles** fetched from RandomUser API.
- **Light/Dark theme toggle**.
- **Like functionality** for each profile.
- **Show/Hide email** toggle per user card.
- **Search profiles by name**.
- **Load more profiles** dynamically.
- **Loading skeletons** while fetching data.
- **Responsive design**.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/instaboard.git
cd instaboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at:

```
http://localhost:5173
```

---

## Project Structure

```
/src
  /components
    /UserCard
      UserCard.jsx
      UserCard.css
    /UserList
      UserList.jsx
      UserList.css
  App.jsx
  App.css
  main.jsx
  index.css
```

- **`main.jsx`**: Entry point for React app.
- **`App.jsx`**: Root component that handles theme toggle and layout.
- **`UserList`**: Fetches and displays a list of user profiles.
- **`UserCard`**: Displays individual user profile with like and email toggle functionality.
- **CSS files**: Styling for components and layout.

---

## Usage

1. Click **Load Profiles** to fetch user profiles.
2. Use the **Search input** to filter users by name.
3. Click **Load More** to fetch more profiles.
4. Click the **heart button** to like a profile.
5. Click **Show/Hide Email** to toggle email visibility.
6. Toggle between **Light/Dark themes** using the top-right button.

---

## Dependencies

- **React** – Front-end library
- **Axios** – HTTP client for API requests
- **Vite** – Build tool and development server

---

## Potential Challenges

While completing this lab, I face challenges with:

1. **Filtering Users**

   - Making sure search works correctly with trimming, case-insensitive matching, and empty states.

2. **Responsive & Skeleton UI**
   - Creating proper skeleton loaders while fetching users.
   - Ensuring the grid layout works across screen sizes.

---

## Estimated Time to Complete

- 3–5 hours

This estimate includes coding, testing, and styling. Time may vary depending on your familiarity with **React**, **CSS**, and **API fetching**.
