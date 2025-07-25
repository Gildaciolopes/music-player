import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", albumRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
