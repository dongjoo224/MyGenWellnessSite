# MyGen Wellness

MyGen Wellness is a modern AI-powered wellness coaching platform that democratizes health and wellness for everyone using science and AI. It helps users build sustainable healthy habits through personalized, science-backed micro-activities. The platform focuses on four key wellness dimensions:

- **Motion** - Physical activity and exercise
- **Nutrition** - Healthy eating habits  
- **Sleep** - Quality rest and recovery
- **Mindfulness** - Mental health and meditation

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks and functional components
- **React Router DOM** - Client-side routing for single-page application navigation
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icon library
- **Vite** - Fast build tool and development server with hot module replacement
- **shadcn/ui** - High-quality, accessible UI components built on Radix UI

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **CORS** - Cross-Origin Resource Sharing middleware
- **Helmet** - Security middleware for Express applications
- **Morgan** - HTTP request logger middleware
- **dotenv** - Environment variable management

### Development Tools
- **ESLint** - Code linting and style enforcement
- **PostCSS** - CSS processing with autoprefixer
- **Nodemon** - Development server with automatic restart

## 📁 Project Structure

```
mygen-wellness/
├── README.md                          # Project documentation
├── frontend/                          # React frontend application
│   ├── index.html                     # Main HTML template
│   ├── package.json                   # Frontend dependencies and scripts
│   ├── vite.config.js                 # Vite configuration
│   ├── tailwind.config.js             # Tailwind CSS configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── .eslintrc.cjs                  # ESLint configuration
│   └── src/                           # Source code directory
│       ├── main.jsx                   # Application entry point
│       ├── App.jsx                    # Main App component with routing
│       ├── App.css                    # Global application styles
│       ├── index.css                  # Base styles and Tailwind imports
│       ├── assets/                    # Static assets
│       │   └── images/                # Image files (user-provided)
│       ├── pages/                     # Page components
│       │   ├── Home.jsx               # Home page with all main sections
│       │   ├── HowItWorks.jsx         # How It Works page
│       │   ├── Media.jsx              # Media/Press page
│       │   └── Login.jsx              # Login/Landing page
│       └── components/                # Reusable components
│           ├── common/                # Common components used across pages
│           │   ├── Header.jsx         # Navigation header
│           │   ├── Footer.jsx         # Site footer
│           │   └── Chatbot.jsx        # AI chatbot interface
│           ├── sections/              # Page-specific sections
│           │   ├── HeroSection.jsx    # Hero section with slideshow
│           │   ├── ProblemSection.jsx # Problem statement section
│           │   ├── SolutionSection.jsx# Solution overview section
│           │   ├── WhyMyGenSection.jsx# Why choose MyGen section
│           │   ├── TestimonialsSection.jsx # User testimonials
│           │   ├── CTASection.jsx     # Call-to-action section
│           │   ├── ProcessSteps.jsx   # How it works process steps
│           │   └── BenefitsSection.jsx# Benefits and features
│           └── ui/                    # shadcn/ui components
│               ├── button.jsx         # Button component
│               ├── card.jsx           # Card component
│               ├── input.jsx          # Input component
│               └── [other-ui-components].jsx
└── backend/                           # Node.js backend API
    ├── server.js                      # Express server and API routes
    ├── package.json                   # Backend dependencies and scripts
    └── .env.example                   # Environment variables template
```

### Directory Explanations

#### Frontend Structure
- **`src/pages/`** - Contains the main page components that represent different routes in the application. Each page is a complete view that users can navigate to.
- **`src/components/common/`** - Houses reusable components that appear across multiple pages, such as the header, footer, and chatbot.
- **`src/components/sections/`** - Contains larger section components that make up the content of pages. These are typically used to break down complex pages into manageable, focused components.
- **`src/components/ui/`** - Contains the shadcn/ui component library components that provide consistent, accessible UI elements throughout the application.
- **`src/assets/images/`** - Directory for storing image assets. This is where you should place your project images.

#### Backend Structure
- **`server.js`** - The main Express server file containing all API routes, middleware configuration, and server setup.
- **`package.json`** - Defines backend dependencies, scripts, and project metadata.
- **`.env.example`** - Template for environment variables that should be copied to `.env` for local development.

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** for cloning the repository

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mygen-wellness.git
   cd mygen-wellness
   ```

2. **Set up the Backend**
   ```bash
   # Navigate to backend directory
   cd backend
   
   # Install dependencies
   npm install
   
   # Create environment file (optional)
   cp .env.example .env
   
   # Start the development server
   npm run dev
   ```
   
   The backend API will be available at `http://localhost:3001`

3. **Set up the Frontend** (in a new terminal)
   ```bash
   # Navigate to frontend directory (from project root)
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start the development server
   npm run dev
   ```
   
   The frontend will be available at `http://localhost:5173`

### Production Build

To build the frontend for production:

```bash
cd frontend
npm run build
```

The built files will be in the `frontend/dist/` directory.

## 🎯 Key Features

### Frontend Features
- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Interactive Slideshow** - Dynamic hero section with rotating wellness habit images and smooth transitions
- **AI Chatbot Interface** - Sidebar chat interface with backend integration for user assistance
- **Smooth Animations** - Engaging user interactions with CSS transitions and hover effects
- **Modern Dark Theme** - Clean, professional dark theme with cyan/teal gradient accents
- **Client-side Routing** - Fast navigation between pages without full page reloads
- **Accessible UI Components** - Built with shadcn/ui for consistent, accessible user interface elements

### Backend Features
- **RESTful API** - Well-structured API endpoints following REST conventions
- **CORS Support** - Configured for cross-origin requests to enable frontend-backend communication
- **Security Middleware** - Helmet.js for security headers and protection against common vulnerabilities
- **Request Logging** - Morgan middleware for comprehensive HTTP request logging
- **Error Handling** - Proper error handling with appropriate HTTP status codes and error messages
- **Health Monitoring** - Health check endpoint for monitoring server status
- **Demo Endpoints** - Functional demo endpoints for beta invitations, contact forms, and chatbot interactions

## 🔧 Development

### Available Scripts

#### Frontend Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

#### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-restart (nodemon)

### Environment Variables

The backend uses environment variables for configuration. Copy `.env.example` to `.env` and modify as needed:

```bash
# Server Configuration
PORT=3001
NODE_ENV=development

# Add other configuration variables as needed
```

### Adding Images

To add images to your project:

1. Place image files in `frontend/src/assets/images/`
2. Update the image paths in components (particularly in `HeroSection.jsx`)
3. Ensure images are optimized for web use

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Configure your hosting service to serve `index.html` for all routes (for client-side routing)

### Backend Deployment
The backend can be deployed to any Node.js hosting service:

1. Ensure all environment variables are set on your hosting platform
2. The server is configured to listen on `0.0.0.0` for external access
3. Set the `PORT` environment variable as required by your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original design and concept by the MyGen Wellness team
- Icons provided by [Lucide React](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with modern web technologies and best practices

---

**MyGen Wellness** - Democratizing wellness for all using science and AI 🌱

For questions or support, please contact the development team or open an issue on GitHub.

