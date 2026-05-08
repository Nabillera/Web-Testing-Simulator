import express from "express";
import { db } from "../firebase.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const report = req.body;
    if (!report.title || !report.level) {
      return res.status(400).json({ error: "Missing title/level" });
    }
    const docRef = await db.collection("reports").add({
      ...report,
      userId: report.userId || null,
      createdAt: new Date(),
    });
    res.status(201).json({
      message: "Report saved successfully",
      id: docRef.id,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;