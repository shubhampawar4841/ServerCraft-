import dotenv from 'dotenv';        // Use import instead of require
import connectDB from './src/db/index.js'; // Ensure file extension is added for ES Modules
import { app } from './app.js';  // Same here for ES Modules import

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Function to start the server
const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        console.log('✅ MongoDB connection successful');

        // Get the port from environment variables, default to 8000
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port: ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Server failed to start:', error.message);
        process.exit(1);
    }
};

// Start the server
startServer();
