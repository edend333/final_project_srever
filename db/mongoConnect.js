const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', false);
  await mongoose.connect("mongodb+srv://edend4:edend1234@cluster0.nthtnrg.mongodb.net/final_project");
  // await mongoose.connect('mongodb://127.0.0.1:27017/fullStack23');
  console.log("mongo connect final_project local");
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}