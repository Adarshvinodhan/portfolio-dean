# CMS-Enabled Portfolio with Admin Dashboard

A full-stack portfolio website with a content management system (CMS) and admin dashboard built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features
- **Dynamic Portfolio**: Update portfolio projects and content via an admin panel.
- **Admin Dashboard**: Secure interface for managing projects, blog posts, and site settings.
- **User Authentication**: Admin login with JWT-based authentication.
- **Rich Text Editor**: Edit and format portfolio content easily.
- **Image Uploads**: Upload and manage images for projects and blogs.
- **SEO Optimization**: Meta tags and structured data support.
- **Fully Responsive**: Works seamlessly on all devices.
- **Dark Mode Support**: Toggle between light and dark themes.

## Tech Stack
### Frontend:
- **React** - Component-based UI framework
- **Tailwind CSS** - Utility-first styling
- **React Router** - Navigation handling
- **MUI (Material-UI)** - UI components

### Backend:
- **Node.js & Express** - Server-side framework
- **MongoDB & Mongoose** - NoSQL database and ORM
- **JWT** - Authentication and authorization
- **Multer** - Image/file uploads
- **Cloudinary** - Image hosting

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/cms-portfolio.git
   cd cms-portfolio
   ```

2. **Setup the Backend**
   ```sh
   cd backend
   npm install
   ```
   - Create a `.env` file in `backend/` and add:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     CLOUDINARY_CLOUD_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```
   - Start the server:
     ```sh
     npm start
     ```

3. **Setup the Frontend**
   ```sh
   cd ../frontend
   npm install
   npm start
   ```

## Project Structure
```
/cms-portfolio
│── backend/
│   ├── controllers/       # Business logic for routes
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Auth and validation
│   ├── config/            # Configurations (DB, Cloudinary, etc.)
│   ├── app.js             # Express app setup
│── frontend/
│   ├── src/components/    # Reusable UI components
│   ├── src/pages/         # Pages for portfolio & admin panel
│   ├── src/redux/         # Redux state management
│   ├── src/hooks/         # Custom React hooks
│   ├── src/App.js         # Main app component
│   ├── src/index.js       # Entry point
│── package.json           # Dependencies
│── README.md              # Project documentation
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register an admin (First-time setup only)
- `POST /api/auth/login` - Login as an admin

### Portfolio Management
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add a new project
- `PUT /api/projects/:id` - Update project details
- `DELETE /api/projects/:id` - Remove a project

### Blog Management
- `GET /api/blogs` - Get all blog posts
- `POST /api/blogs` - Add a new blog post
- `PUT /api/blogs/:id` - Update a blog post
- `DELETE /api/blogs/:id` - Remove a blog post

## Customization
- Modify frontend theme in `tailwind.config.js` and MUI theme settings.
- Adjust API routes and middleware as needed.

## Contributing
Feel free to submit issues, feature requests, or pull requests.

## License
This project is licensed under the MIT License.

---

Build an awesome portfolio! 🚀

