import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import users from "./routes/user.js";
import lessons from "./routes/lessons.js";
import sounds from "./routes/sounds.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({ origin: process.env.DOMAIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use("/api/user", users);
app.use("/api/lesson", lessons);
app.use("/api/sound", sounds);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
