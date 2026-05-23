import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reportRoutes from "./routes/reports.js";
import evaluationRoutes from "./routes/evaluations.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/reports", reportRoutes);
app.use("/api/evaluations", evaluationRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
