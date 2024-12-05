import express from 'express';  // Use import instead of require
import cors from 'cors';        // Same for other modules
import cookieParser from 'cookie-parser';
// import router from './src/routes/user.routes';
const app = express();

// Set up CORS with options from environment variables
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Middleware for handling fJSON and URL-encoded data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Cookie parsing middleware
app.use(cookieParser());

// Define your routes
// app.use("/api/v1/users", userRouter);

// Home route to test server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Export the app (can now be imported as needed)
export { app };
