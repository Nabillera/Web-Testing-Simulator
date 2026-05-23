import express from "express";
import { db } from "../config/firebase.js";
import { evaluateBugReport } from "../services/nlpService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const report = req.body;
    const reportRef = await db
      .collection("reports")
      .add({ ...report, createdAt: new Date() });
    const evaluation = await evaluateBugReport(report);
    await db.collection("evaluations").add({
      reportId: reportRef.id,
      sessionId: report.sessionId,
      level: report.level,
      ...evaluation,
      createdAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Bug report submitted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit bug report",
    });
  }
});

export default router;
