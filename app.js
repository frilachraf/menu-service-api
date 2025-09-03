const mongoose = require("mongoose");

// Replace with your connection string
const uri = "mongodb+srv://frilachrafdev_db_user:EZ5TQM3sbMP11kEd@cluster0.f4bsjio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model
const User = mongoose.model("User", userSchema);

// Insert an example user
async function run() {
  const user = new User({ name: "Achraf", email: "achraf@example.com", age: 25 });
  await user.save();
  console.log("User saved:", user);
}

run();