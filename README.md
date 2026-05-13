# Portfolio Website - Full Stack

A scalable, production-ready portfolio website built with React, Node.js, MongoDB, and Cloudinary.

## 📁 Project Structure

```
portfolio-website/
├── client/          # React Frontend (Vite + Tailwind)
├── server/          # Node.js Backend (Express + MongoDB)
├── .gitignore
├── README.md
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for image storage)
- Git

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

**Frontend Dependencies:**

- react-router-dom
- axios
- framer-motion
- react-icons
- tanstack/react-query (optional)
- react-hot-toast (optional)

**Environment Variables (.env):**

```
VITE_API_URL=http://localhost:5000/api
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

**Backend Dependencies:**

```
express, mongoose, cors, dotenv, bcryptjs,
jsonwebtoken, multer, cloudinary, nodemailer
```

**Environment Variables (.env):**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=admin@example.com

NODE_ENV=development
```

## 📦 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin only)

## 🗄️ Database Collections

### Users

```json
{
	"name": "string",
	"email": "string (unique)",
	"password": "string (hashed)",
	"role": "user | admin",
	"createdAt": "date",
	"updatedAt": "date"
}
```

### Projects

```json
{
	"title": "string",
	"description": "string",
	"techStack": ["string"],
	"image": "string (URL)",
	"githubLink": "string",
	"liveLink": "string",
	"featured": "boolean",
	"createdAt": "date",
	"updatedAt": "date"
}
```

### Contacts

```json
{
	"name": "string",
	"email": "string",
	"message": "string",
	"createdAt": "date",
	"updatedAt": "date"
}
```

## 🔐 Authentication

- JWT-based authentication
- Token expiry: 7 days
- Passwords hashed with bcryptjs
- Role-based access control (user, admin)

## 🖼️ Image Management

Images are handled through Cloudinary:

- Automatic resizing and optimization
- CDN delivery
- Secure upload with signed URLs

## 🎨 Frontend Structure

- **Components**: Reusable UI components (common, layout, pages, etc.)
- **Pages**: Full-page components (Home, About, Projects, Contact, Dashboard)
- **Services**: API integration layer
- **Hooks**: Custom React hooks
- **Context**: Global state management (Auth, Theme)
- **Utils**: Helper functions and constants
- **Styles**: Global CSS and animations

## 🔧 Backend Structure

- **Config**: Database, JWT, Cloudinary configuration
- **Controllers**: Business logic for each route
- **Models**: MongoDB schemas
- **Middleware**: Authentication, error handling, file uploads
- **Routes**: API endpoint definitions
- **Services**: Reusable business logic
- **Utils**: Helper functions and validators

## 📱 Features

- ✅ User authentication (Register/Login)
- ✅ Project showcase with filtering
- ✅ Admin dashboard for project management
- ✅ Contact form with email notifications
- ✅ Theme switching (Light/Dark mode)
- ✅ Responsive design
- ✅ Image optimization with Cloudinary
- ✅ SEO-friendly

## 🚢 Deployment

### Frontend (Vercel)

```bash
npm run build
# Push to Vercel for auto-deployment
```

### Backend (Render)

```bash
# Set environment variables in Render dashboard
# Set start command: npm start
```

### Database (MongoDB Atlas)

- Sign up at mongodb.com/atlas
- Create a cluster
- Get connection string for .env

## 🛠️ Development Tools

**Frontend:**

- Vite - Build tool
- Tailwind CSS - Styling
- ESLint - Code quality

**Backend:**

- Nodemon - Auto-reload
- Express - Web framework
- Mongoose - MongoDB ODM

## 📝 File Upload

- Maximum file size: 5MB
- Allowed formats: Image files only
- Storage: Cloudinary
- Local backup: `/server/src/uploads/projects/`

## 🤝 Contributing

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

MIT License

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy coding! 🚀**
