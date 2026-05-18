deployed link - https://loom-a-language-learning-community.onrender.com/login
Based on the codebase you provided, here is a comprehensive summary of your **Loom** application.

🚀 Application Overview

Loom is a full-stack, real-time communication and social networking platform. It allows users to create profiles, connect with others through friend requests, and engage in seamless one-on-one text and video conversations. The application features a modern, responsive UI with customizable themes.

---

### ✨ Key Features

* **Secure Authentication & Onboarding:** Features a complete JWT-based authentication flow (Signup, Login, Logout) with password hashing (bcrypt). It also includes an onboarding step for new users to set up their profiles.
* **Real-Time Chat & Video Calling:** Powered by the **Stream API** (`stream-chat`), the app supports robust, low-latency text messaging and high-quality video calls.
* **Friend Management System:** Users can discover other people on the platform, send/receive friend requests, and manage their connections via a dedicated Friends page and Notifications system.
* **Dynamic UI & Theming:** Built with Tailwind CSS, the app includes a `ThemeSelector` component, allowing users to customize the visual appearance of their interface.
* **Notifications System:** Alerts users to incoming friend requests and other platform activities.

---

### 🛠️ Tech Stack

**Frontend (Client-Side)**

* **Core:** React.js powered by Vite for lightning-fast builds.
* **Styling:** Tailwind CSS for highly customizable, responsive design.
* **State Management:** Custom hooks and Zustand (`useThemeStore.js`) for managing global app states like theming.
* **Network Requests:** Axios for communicating with the custom backend API.

**Backend (Server-Side)**

* **Environment:** Node.js with Express.js framework.
* **Database:** MongoDB with Mongoose ODM for structured data modeling (`User` and `FriendRequest` schemas).
* **Security:** `jsonwebtoken` (JWT) for secure route protection and session management, `bcryptjs` for password cryptography, and `cors` for cross-origin resource sharing.

**Third-Party Services Integration**

* **Stream (GetStream.io):** Utilized heavily on both the frontend and backend to offload the complex infrastructure required for real-time chat and video communication.

---

### 📂 Architecture

The project follows a clean **Monorepo** structure separated into two main directories:

1. **`/backend`**: Follows an MVC (Model-View-Controller) architecture. It exposes RESTful APIs through organized routes (`auth.route.js`, `chat.route.js`, `user.routes.js`), processes business logic in controllers, and interacts with MongoDB via models. It also includes middleware for protecting authenticated routes.
2. **`/frontend`**: A component-driven React application. It separates concerns neatly into `pages` (e.g., HomePage, ChatPage, CallPage), reusable UI `components` (e.g., Navbar, Sidebar, FriendCard), custom `hooks` for business logic (e.g., `useAuthUser`, `useLogin`), and state management stores.

*This is a highly scalable, well-structured MERN stack application that beautifully integrates third-party communication APIs! Let me know if you need a summary tailored specifically for a resume or a GitHub `README.md` file.*
