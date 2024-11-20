const dotenv = require('dotenv');
const connectDB = require('./src/db/index');
const { app } = require('./app'); // Import app

dotenv.config({ path: './.env' });

const startServer = async () => {
    try {
        await connectDB();
        console.log('✅ MongoDB connection successful');

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port: ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Server failed to start:', error.message);
        process.exit(1);
    }
};

startServer();
