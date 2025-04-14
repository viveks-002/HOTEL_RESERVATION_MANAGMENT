import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
dotenv.config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
// app.get('/', (req, res) => {
//   res.send("Hello World!");
// });
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Static folder from Vite/Cra build
const frontendPath = path.join(__dirname, '../frontend/dist') // use 'build' if CRA

app.use(express.static(frontendPath))

// Serve index.html for all unknown routes (React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'))
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
