## ⏱️ How Long Did It Take to Build?

**Total Development Time**: Approximately 15-20 hours over 2-3 days

The project was developed in three main phases:

- **Day 1** (6-8 hours): Initial setup, component structure, Team page with API integration, and basic routing
- **Day 2** (5-6 hours): TeamDetails page, LikedUsers functionality, localStorage integration, and data flow between pages
- **Day 3** (4-6 hours): Responsive design across all breakpoints, dark mode implementation, styling refinements, and bug fixes

---

## 🚧 What Was the Most Difficult Part?

The most challenging aspect was making the **navigation bar fully responsive** while maintaining proper layout and functionality across 7+ different screen sizes.

**The Problem**:
The dark mode toggle button wouldn't scale properly on smaller screens - it would either overflow the navbar or appear disproportionately large. Additionally, the logo would sometimes appear beside the navigation links instead of staying on the left, creating layout issues.

**The Solution**:

- Implemented precise responsive breakpoints (360px, 480px, 640px, 768px, 1024px, 1200px)
- Added `max-width` and `max-height` constraints to prevent button growth
- Used flexbox with `margin-left: auto` on the toggle button for proper alignment
- Created specific sizing for each breakpoint while maintaining usability

**What I Learned**:
Responsive design isn't just about making things smaller - it's about maintaining visual hierarchy, usability, and professional appearance at every screen size. This challenge taught me the importance of testing on actual devices and using browser dev tools effectively.

Other notable challenges included:

- **Data passing between routes**: Mastering React Router's `useNavigate` and `useLocation` for seamless state management
- **localStorage strategy**: Storing complete user objects instead of just IDs to avoid "Unknown User" issues
- **Search performance**: Implementing real-time client-side filtering for 100+ users without lag
