import express from "express";
import { db } from "../config/firebase.js";

const router = express.Router();

router.post("/finish/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const {
      completionTime,
      level,
      userId = null,
      isAnonymous = false,
    } = req.body;

    const snapshot = await db
      .collection("evaluations")
      .where("sessionId", "==", sessionId)
      .get();

    const evaluations = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const evaluation = {
          id: doc.id,
          ...doc.data(),
        };
        const reportDoc = await db
          .collection("reports")
          .doc(evaluation.reportId)
          .get();

        return {
          ...evaluation,
          report: reportDoc.exists ? reportDoc.data() : null,
        };
      }),
    );

    const totalReports = evaluations.length;

    const averageScore =
      totalReports > 0
        ? evaluations.reduce((sum, report) => sum + report.overallScore, 0) /
          totalReports
        : 0;

    const bestScore =
      totalReports > 0
        ? Math.max(...evaluations.map((report) => report.overallScore))
        : 0;

    const sessionData = {
      sessionId,
      userId,
      isAnonymous,
      level,
      completionTime,
      totalReports,
      averageScore: Number(averageScore.toFixed(1)),
      bestScore,
      createdAt: new Date(),
    };

    const sessionRef = await db.collection("sessions").add(sessionData);

    res.json({
      success: true,
      sessionDocumentId: sessionRef.id,
      ...sessionData,
      evaluations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to complete level",
    });
  }
});

export default router;
