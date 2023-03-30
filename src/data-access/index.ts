import mongoose from 'mongoose';

const dbConnector = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS ? process.env.MONGODB_ATLAS : "");
        console.log('database conected');
    } catch (error) {
        console.log(error);
    }
};

export default dbConnector;