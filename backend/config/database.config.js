import mongoose from "mongoose";

(async () => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_URI);
    if (!database) {
      console.log(`Error - Connecting to MongoDB - ${error}`);
    }

    console.log(`Success - Connected to MongoDB`);
  } catch (error) {
    console.log(`Error - Connecting to MongoDB - ${error}`);
  }
})();

export default mongoose.connection;
