import mongoose from "mongoose";

mongoose
  .connect(String("mongodb+srv://f4D5enApQhakd7NJ:f4D5enApQhakd7NJ@cluster0.fmamyhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), { dbName: "bordmate" })
  .then(() => {
      console.log(`Mongo connected`);
    })
    .catch((er) => {
      console.log("🚀 ~ process.env.MONGODB_URI:", (process.env.MONGODB_URI))
    console.log(`Failed mongo connection ${er}`);
  });
//   mohamedaflah186
// f4D5enApQhakd7NJ