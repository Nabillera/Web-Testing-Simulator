import express from "express";
import { db } from "../config/firebase.js";

const router = express.Router();

router.post("/finish/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { completionTime, level } = req.body;

    const snapshot = await db
      .collection("evaluations")
      .where("sessionId", "==", sessionId)
      .get();
    const evaluations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const totalReports = evaluations.length;
    const averageScore =
      totalReports > 0
        ? evaluations.reduce((sum, report) => sum + report.overallScore, 0) /
          totalReports
        : 0;
    
    const sessionData = {
      sessionId,
      level,
      completionTime,
      totalReports,
      averageScore: Number(averageScore.toFixed(1)),
      createdAt: new Date(),
    };

    await db.collection("sessions").add(sessionData);

    res.json({ success: true, ...sessionData, evaluations });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to complete level",
    });
  }
});

export default router;
